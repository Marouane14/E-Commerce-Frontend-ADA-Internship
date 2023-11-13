import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAmountsComponent } from './chart-amounts.component';

describe('ChartAmountsComponent', () => {
  let component: ChartAmountsComponent;
  let fixture: ComponentFixture<ChartAmountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAmountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
