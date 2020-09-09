import { Component, OnInit } from '@angular/core';

import { RandomCardService } from '../../services/random-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private randomCardService: RandomCardService) {}

  ngOnInit(): void {}

  randomDiv(): void {
    this.randomCardService.randomDiv();
  }

  scrollWin() {
    window.scrollBy(0, window.innerHeight);
  }
}
