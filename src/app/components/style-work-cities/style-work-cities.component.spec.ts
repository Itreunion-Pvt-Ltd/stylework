import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleWorkCitiesComponent } from './style-work-cities.component';

describe('StyleWorkCitiesComponent', () => {
  let component: StyleWorkCitiesComponent;
  let fixture: ComponentFixture<StyleWorkCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleWorkCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleWorkCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
