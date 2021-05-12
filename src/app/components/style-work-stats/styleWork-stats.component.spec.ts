import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleWorkStatsComponent } from './styleWork-stats.component';

describe('StyleWorkStatsComponent', () => {
  let component: StyleWorkStatsComponent;
  let fixture: ComponentFixture<StyleWorkStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StyleWorkStatsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleWorkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
