import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerComponent } from './count-down-timer.component';

describe('CountDownTimerComponent', () => {
  let component: CountDownTimerComponent;
  let fixture: ComponentFixture<CountDownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
