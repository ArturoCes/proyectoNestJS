import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { Card } from './card.model';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}
  @Get()
  getCardsAllCards(@Query('name') name: string) {
    if (name) {
      return this.cardsService.getCardsByName(name);
    }
    return this.cardsService.getAllCards();
  }
  @Get(':id')
  getCardById(@Param('id') id: string) {
    return this.cardsService.getCardById(id);
  }
  @Post()
  createCard(@Body() card: Card) {
    return this.cardsService.createCard(card);
  }
  @Put(':id')
  replaceCard(@Param('id') id: string, @Body() card: Card) {
    return this.cardsService.replaceCard(id, card);
  }
  @Patch(':id')
  updateCard(@Param('id') id: string, @Body() card: Card) {
    return this.cardsService.updateCard(id, card);
  }
  @Delete(':id')
  deteleCard(@Param('id') id: string) {
    return this.cardsService.deteleCard(id);
  }
}
