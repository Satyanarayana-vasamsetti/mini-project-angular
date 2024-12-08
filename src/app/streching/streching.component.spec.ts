import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrechingComponent } from './streching.component';

describe('StrechingComponent', () => {
  let component: StrechingComponent;
  let fixture: ComponentFixture<StrechingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrechingComponent]
    });
    fixture = TestBed.createComponent(StrechingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
