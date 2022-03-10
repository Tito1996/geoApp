import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToMeriendarComponent } from './go-to-meriendar.component';

describe('GoToMeriendarComponent', () => {
  let component: GoToMeriendarComponent;
  let fixture: ComponentFixture<GoToMeriendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToMeriendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToMeriendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
