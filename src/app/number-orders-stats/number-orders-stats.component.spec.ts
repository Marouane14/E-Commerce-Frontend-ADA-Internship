import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOrdersStatsComponent } from './number-orders-stats.component';

describe('NumberOrdersStatsComponent', () => {
  let component: NumberOrdersStatsComponent;
  let fixture: ComponentFixture<NumberOrdersStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOrdersStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOrdersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
