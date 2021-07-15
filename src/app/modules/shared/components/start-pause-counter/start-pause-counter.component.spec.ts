import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseCounterComponent } from './start-pause-counter.component';

describe('StartPauseCounterComponent', () => {
  let component: StartPauseCounterComponent;
  let fixture: ComponentFixture<StartPauseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
