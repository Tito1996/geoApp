import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToIllusionComponent } from './go-to-illusion.component';

describe('GoToIllusionComponent', () => {
  let component: GoToIllusionComponent;
  let fixture: ComponentFixture<GoToIllusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToIllusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToIllusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
