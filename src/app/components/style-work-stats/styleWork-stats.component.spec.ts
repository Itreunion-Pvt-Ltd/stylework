import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleworkStatsComponent } from './stylework-stats.component';

describe('StyleworkStatsComponent', () => {
  let component: StyleworkStatsComponent;
  let fixture: ComponentFixture<StyleworkStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleworkStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleworkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
