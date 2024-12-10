import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibilityComponent } from './flexibility.component';

describe('FlexibilityComponent', () => {
  let component: FlexibilityComponent;
  let fixture: ComponentFixture<FlexibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexibilityComponent]
    });
    fixture = TestBed.createComponent(FlexibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
