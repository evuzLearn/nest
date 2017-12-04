import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './../models/create-cat.dto';
import { CatsService } from '../services/cats.service';
import { Cat } from '../interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async cats() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.catsService.findAll());
      }, 1000);
    });
  }

  @Get(':id')
  cat(@Param() { id }) {
    return this.catsService.findAll()[id];
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
