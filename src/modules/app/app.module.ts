import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { CatsController } from './controllers/cats.controller';

import { CatsService } from './services/cats.service';

@Module({
  modules: [],
  controllers: [AppController, CatsController],
  components: [CatsService],
})
export class ApplicationModule {}
