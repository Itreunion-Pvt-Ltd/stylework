import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WhyCoWorkingComponent } from './why-co-working.component';

describe('WhyCoWorkingComponent', () => {
  let component: WhyCoWorkingComponent;
  let fixture: ComponentFixture<WhyCoWorkingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCoWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCoWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
