import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconventionalBenefitsComponent } from './unconventional-benefits.component';

describe('UnconventionalBenefitsComponent', () => {
  let component: UnconventionalBenefitsComponent;
  let fixture: ComponentFixture<UnconventionalBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconventionalBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconventionalBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
