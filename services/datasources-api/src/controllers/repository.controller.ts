import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RepositoryService } from '../services/repository.service';
import { AddRepositoryDto } from '../dtos/addRepository.dto';

@Controller('repositories')
export class RepositoryController {

    constructor(
        private readonly repositoryService: RepositoryService
    ) { }

    @Post()
    async addRepository(@Body() body: AddRepositoryDto) {
        const repository = await this.repositoryService.create(body);
        return { success: true, data: repository };
    }

    @Get('/:id/key')
    async getKey(@Param('id') id: number) {
        const secret = await this.repositoryService.getSecret(id);
        return { success: true, data: secret };
    }

    @Get('/:id/branches')
    async getBranches(@Param('id') id: number) {
        const branches = await this.repositoryService.getBranches(id);
        return { success: true, data: branches };
    }

}
