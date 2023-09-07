import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorousalSliderComponent } from './corousal-slider.component';

describe('CorousalSliderComponent', () => {
  let component: CorousalSliderComponent;
  let fixture: ComponentFixture<CorousalSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorousalSliderComponent]
    });
    fixture = TestBed.createComponent(CorousalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
