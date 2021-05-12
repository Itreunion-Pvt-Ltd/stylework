import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleWorkBenifitsComponent } from './style-work-benefits.component';

describe('StyleWorkBenifitsComponent', () => {
  let component: StyleWorkBenifitsComponent;
  let fixture: ComponentFixture<StyleWorkBenifitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StyleWorkBenifitsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleWorkBenifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
