import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecalculaterComponent } from './pricecalculater.component';

describe('PricecalculaterComponent', () => {
  let component: PricecalculaterComponent;
  let fixture: ComponentFixture<PricecalculaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecalculaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
