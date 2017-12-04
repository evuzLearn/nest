import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './../models/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  cats() {
    return new Promise(res => {
      setTimeout(() => {
        res('Cats');
      }, 1000);
    });
  }

  @Get(':id')
  cat(@Param() { id }) {
    return `Cat ${id}`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
      console.log(createCatDto);
  }
}
