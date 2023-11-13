import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberProductsStatsComponent } from './number-products-stats.component';

describe('NumberProductsStatsComponent', () => {
  let component: NumberProductsStatsComponent;
  let fixture: ComponentFixture<NumberProductsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberProductsStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberProductsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
