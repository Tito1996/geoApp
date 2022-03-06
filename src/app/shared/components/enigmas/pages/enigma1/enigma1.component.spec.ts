import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigma1Component } from './enigma1.component';

describe('Enigma1Component', () => {
  let component: Enigma1Component;
  let fixture: ComponentFixture<Enigma1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigma1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Enigma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
