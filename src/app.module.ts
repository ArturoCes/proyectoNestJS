import { Module } from '@nestjs/common';
import { CardsController } from './cards/cards.controller';
import { TablesController } from './tables/tables.controller';
import { CardsService } from './cards/cards.service';

@Module({
  imports: [],
  controllers: [CardsController, TablesController],
  providers: [CardsService],
})
export class AppModule {}
