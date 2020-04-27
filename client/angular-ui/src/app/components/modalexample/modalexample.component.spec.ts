import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalexampleComponent } from './modalexample.component';

describe('ModalexampleComponent', () => {
  let component: ModalexampleComponent;
  let fixture: ComponentFixture<ModalexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
