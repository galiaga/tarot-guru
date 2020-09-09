import { TestBed } from '@angular/core/testing';

import { RandomCardService } from './random-card.service';

describe('RandomCardService', () => {
  let service: RandomCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
