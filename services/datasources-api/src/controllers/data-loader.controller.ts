import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataLoaderService } from '../services/data-loader.service';
import { AddDataLoaderDto } from '../dtos/addDataLoader.dto';

@Controller('data-loaders')
export class DataLoaderController {

  constructor(
    private readonly dataLoaderService: DataLoaderService
  ) { }

  @Get()
  async findAll() {
    const dataLoaders = await this.dataLoaderService.findAll();
    return { success: true, data: dataLoaders };
  }

  @Post()
  async addDataLoader(@Body() body: AddDataLoaderDto) {
    const dataLoader = await this.dataLoaderService.create(body);
    return { success: true, data: dataLoader };
  }

  // @Post('custom/clone')
  // async findAll() {
  //   const dataLoaders = await this.dataLoaderService.findAll();
  //   return { success: true, data: dataLoaders };
  // }

}
