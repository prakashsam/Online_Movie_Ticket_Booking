import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterLoginComponent } from './theater-login.component';

describe('TheaterLoginComponent', () => {
  let component: TheaterLoginComponent;
  let fixture: ComponentFixture<TheaterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
