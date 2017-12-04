import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CatsController } from './controllers/cats.controller';

@Module({
  modules: [],
  controllers: [AppController, CatsController],
  components: [],
})
export class ApplicationModule {}
