import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route6Component } from './route6.component';

describe('Route6Component', () => {
  let component: Route6Component;
  let fixture: ComponentFixture<Route6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
