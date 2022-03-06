import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigma2Component } from './enigma2.component';

describe('Enigma2Component', () => {
  let component: Enigma2Component;
  let fixture: ComponentFixture<Enigma2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigma2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Enigma2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
