import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmasComponent } from './enigmas.component';

describe('EnigmasComponent', () => {
  let component: EnigmasComponent;
  let fixture: ComponentFixture<EnigmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
