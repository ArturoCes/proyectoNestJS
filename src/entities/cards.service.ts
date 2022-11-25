import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
  constructor(@InjectRepository(Card) private cardRepo: Repository<Card>) {}

  findAll() {
    return this.cardRepo.find();
  }

  getCardsByName(name: string) {
    if (name) {
      return `Este método retorna todos los productos filtrados por nombre segun la query ${name}`;
    }
    return 'Este método retorna todos  los productos';
  }

  getCardById(id: string) {
    return `Este método retorna la carta con id: ${id}`;
  }

  createCard(card: any) {
    const newCard = new Card();
    newCard.name = card.name;
    newCard.amount = card.amount;

    return this.cardRepo.save(newCard);
  }

  replaceCard(id: string, card: Card) {
    return `Este método reemplaza una carta con el id: ${id}`;
  }

  updateCard(id: string, card: Card) {
    return `Este método reemplaza parcialmete una carta con el id: ${id}`;
  }

  deteleCard(id: string) {
    return `Este método elimina una carta con el id: ${id}`;
  }
}
