import { Injectable } from '@nestjs/common';
import { Card } from './card.model';

@Injectable()
export class CardsService {
  getAllCards() {
    return 'Este método retorna todos  los productos';
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

  createCard(card: Card) {
    console.log(card);
    return 'Este método crea una nueva carta';
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
