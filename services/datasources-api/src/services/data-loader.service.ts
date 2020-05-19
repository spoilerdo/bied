import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataLoaderEntity } from '../database/entities/data-loader.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddDataLoaderDto } from '../dtos/addDataLoader.dto';

@Injectable()
export class DataLoaderService {

  constructor(
    @InjectRepository(DataLoaderEntity)
    private readonly dataLoaderRepository: Repository<DataLoaderEntity>
  ) { }

  async findAll(): Promise<DataLoaderEntity[]> {
    return await this.dataLoaderRepository.find();
  }

  async create(addDataLoaderDto: AddDataLoaderDto): Promise<DataLoaderEntity> {
    const { name, researchId } = addDataLoaderDto;

    const dataLoader = new DataLoaderEntity();
    dataLoader.name = name;
    dataLoader.researchId = researchId;

    await this.dataLoaderRepository.save(dataLoader);

    return dataLoader;
  }

}
