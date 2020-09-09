import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomCardService {
  constructor() {}
  randomDiv() {
    var myarray = new Array(
      'card-1',
      'card-2',
      'card-3',
      'card-4',
      'card-5',
      'card-6',
      'card-7',
      'card-8',
      'card-9',
      'card-10',
      'card-11',
      'card-12',
      'card-13',
      'card-14',
      'card-15',
      'card-16',
      'card-17',
      'card-18',
      'card-19',
      'card-20',
      'card-21',
      'card-22',
      'card-23',
      'card-24',
      'card-25',
      'card-26',
      'card-27',
      'card-28',
      'card-29',
      'card-30',
      'card-31',
      'card-32',
      'card-33',
      'card-34',
      'card-35',
      'card-36',
      'card-37',
      'card-38',
      'card-39',
      'card-40',
      'card-41',
      'card-42',
      'card-43',
      'card-44'
    );

    var arr = [];
    var iterator = arr.values();
    while (arr.length < 8) {
      var r = Math.floor(Math.random() * 43) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);

    for (let elements of iterator) {
      console.log(elements);
      var ChosenDiv = myarray[elements];
      document.getElementById(ChosenDiv).style.display = 'inline-block';
      console.log(ChosenDiv);
    }
  }
}
