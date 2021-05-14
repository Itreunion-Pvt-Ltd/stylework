import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkspaceFiltersComponent } from './workspace-filters.component';

describe('WorkspaceFiltersComponent', () => {
  let component: WorkspaceFiltersComponent;
  let fixture: ComponentFixture<WorkspaceFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
