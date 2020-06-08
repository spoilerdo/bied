import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderController } from './controllers/data-loader.controller';
import { DataLoaderService } from './services/data-loader.service';
import { RepositoryController } from './controllers/repository.controller';
import { RepositoryService } from './services/repository.service';
import { BranchEntity } from './database/entities/branch.entity';
import { CommitEntity } from './database/entities/commit.entity';
import { DataLoaderEntity } from './database/entities/data-loader.entity';
import { RepositoryEntity } from './database/entities/repository.entity';

const ENTITIES = [
  BranchEntity,
  CommitEntity,
  DataLoaderEntity,
  RepositoryEntity
]

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-datasource',
      port: 3306,
      username: 'root',
      password: process.env.MYSQL_PASSWORD,
      database: 'data-operator',
      entities: ENTITIES,
      synchronize: true,
    }),
    TypeOrmModule.forFeature(ENTITIES),
  ],
  controllers: [DataLoaderController, RepositoryController],
  providers: [DataLoaderService, RepositoryService],
})
export class AppModule { }
