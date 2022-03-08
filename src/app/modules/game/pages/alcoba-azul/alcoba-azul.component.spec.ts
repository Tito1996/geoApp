import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcobaAzulComponent } from './alcoba-azul.component';

describe('AlcobaAzulComponent', () => {
  let component: AlcobaAzulComponent;
  let fixture: ComponentFixture<AlcobaAzulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcobaAzulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcobaAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
