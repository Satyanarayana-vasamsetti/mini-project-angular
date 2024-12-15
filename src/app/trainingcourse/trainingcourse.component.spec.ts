import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingcourseComponent } from './trainingcourse.component';

describe('TrainingcourseComponent', () => {
  let component: TrainingcourseComponent;
  let fixture: ComponentFixture<TrainingcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingcourseComponent]
    });
    fixture = TestBed.createComponent(TrainingcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
