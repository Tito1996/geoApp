import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToGourmetComponent } from './go-to-gourmet.component';

describe('GoToGourmetComponent', () => {
  let component: GoToGourmetComponent;
  let fixture: ComponentFixture<GoToGourmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToGourmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToGourmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
