import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleWorkSpaceComponent } from './style-work-space.component';

describe('StyleWorkSpaceComponent', () => {
  let component: StyleWorkSpaceComponent;
  let fixture: ComponentFixture<StyleWorkSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleWorkSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleWorkSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
