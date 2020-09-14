import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsElTarotComponent } from './que-es-el-tarot.component';

describe('QueEsElTarotComponent', () => {
  let component: QueEsElTarotComponent;
  let fixture: ComponentFixture<QueEsElTarotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueEsElTarotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsElTarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
