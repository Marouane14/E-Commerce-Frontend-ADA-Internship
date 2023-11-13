import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUsersAdminsComponent } from './chart-users-admins.component';

describe('ChartUsersAdminsComponent', () => {
  let component: ChartUsersAdminsComponent;
  let fixture: ComponentFixture<ChartUsersAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartUsersAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartUsersAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
