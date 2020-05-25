import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryEntity } from '../database/entities/repository.entity';
import { DataLoaderEntity } from '../database/entities/data-loader.entity';
import { Repository } from 'typeorm';
import { AddRepositoryDto } from '../dtos/addRepository.dto';
import { ApiException } from '../exceptions/api.exception';
import simplegit from 'simple-git/promise';
import { promisify } from 'util';
import * as fs from 'fs';
import * as tmp from 'tmp';
import * as path from 'path';
import Rimraf from 'rimraf';
import * as keygen from 'ssh-keygen'

const fsExists = promisify(fs.exists);
const tmpDir = promisify(tmp.dir);
const rimraf = promisify(Rimraf);

export interface RepoBranch {
  commitCount: number;
}

export class Repo {
  public dir: string | null = null;
  private git = simplegit();
  constructor(public readonly url: string) { }

  async clone(branchName?: string) {
    try {
      this.dir = await tmpDir();

      await this.git.clone(
        this.url,
        this.dir,
        !!branchName ? ['-b', branchName] : [],
      );

      await this.git.cwd(this.dir);
    } catch (e) {
      await this.delete();
    }
  }

  async checkIfPrivate(): Promise<boolean> {
    try {
      this.dir = await tmpDir();

      await this.git.clone(
        this.url,
        this.dir
      );

      await this.delete();
      return true;
    } catch (e) {
      await this.delete();
      return false;
    }
  }

  async branches(): Promise<string[] | boolean> {
    let summary = null;
    try {
      summary = await this.git.branch(['-r']);
    } catch {
      return false;
    }

    const branches = summary.all.map(name => {
      const parts = name.split('/');
      const branchName = parts[parts.length - 1];

      return branchName;
    });

    return branches.filter((elem, pos) => {
      return branches.indexOf(elem) == pos;
    });
  }

  async branch(branchName: string): Promise<RepoBranch> {
    await this.git.checkout(branchName);

    const commitCount = await this.git.raw(['rev-list', '--count', branchName]);

    return {
      commitCount: parseInt(commitCount.trim(), 10),
    };
  }

  async delete() {
    await rimraf(this.dir);
  }
}

@Injectable()
export class RepositoryService {

  constructor(
    @InjectRepository(RepositoryEntity)
    private readonly repositoryRepository: Repository<RepositoryEntity>,
    @InjectRepository(DataLoaderEntity)
    private readonly dataLoaderRepository: Repository<DataLoaderEntity>
  ) { }

  async create(addRepositoryDto: AddRepositoryDto): Promise<any> {
    const { gitUrl, dataLoaderId } = addRepositoryDto;

    const repositoryCount = await this.repositoryRepository.count({
      where: { gitUrl, dataLoaderId },
    });

    if (repositoryCount > 0) {
      throw new ApiException(
        HttpStatus.CONFLICT,
        'repository already exists in project',
      );
    }

    const repo = new Repo(gitUrl);
    const repoState = await repo.checkIfPrivate();

    const dataLoader = await this.dataLoaderRepository.findOne(dataLoaderId);
    const repository = new RepositoryEntity();
    repository.gitUrl = gitUrl;
    repository.dataLoader = dataLoader;

    await this.repositoryRepository.save(repository);

    if (repoState) {
      return {
        private: true,
        repository: repository
      }
    } else {
      return {
        private: false,
        repository: repository
      }
    }
  }

  async getSecret(repositoryId: number) {
    let out = null;
    keygen({
      destroy: true, // Remove key files after reading
    }, (err, res) => {
      if (err) return;
      out = res;
    });

    if (out) {
      return { public_key: out.pubKey }
    } else {
      throw new ApiException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Error while generating key'
      )
    }
  }

  async getBranches(repositoryId: number) {
    const repository = await this.repositoryRepository.findOne({
      id: repositoryId,
    });

    if (!repository) {
      throw new ApiException(HttpStatus.CONFLICT, 'repository not found');
    }

    const repo = new Repo(repository.gitUrl);

    await repo.clone();
    const branchNames = await repo.branches();

    return branchNames;
  }

}
