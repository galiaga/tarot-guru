import { Component, OnInit } from '@angular/core';

import { CARDS } from '../../data/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards = CARDS;

  // Shuffle array
  shuffled = this.cards.sort(() => 0.5 - Math.random());
  randomCardsArray =
    this.shuffled.length == 0 ? null : this.shuffled.slice(0, 3);
  cardIndex = 0;

  changeIndex(number) {
    if (
      (this.cardIndex > 0 && number < 0) || //index must be greater than 0 at all times
      (this.cardIndex < this.randomCardsArray.length && number > 0)
    ) {
      //index must be less than length of array
      this.cardIndex += number;
    }
  }

  resetArray() {
    this.randomCardsArray.length = 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
