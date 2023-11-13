import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStatsContainerComponent } from './cards-stats-container.component';

describe('CardsStatsContainerComponent', () => {
  let component: CardsStatsContainerComponent;
  let fixture: ComponentFixture<CardsStatsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsStatsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsStatsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
