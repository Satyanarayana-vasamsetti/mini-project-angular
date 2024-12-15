import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidscourseComponent } from './kidscourse.component';

describe('KidscourseComponent', () => {
  let component: KidscourseComponent;
  let fixture: ComponentFixture<KidscourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidscourseComponent]
    });
    fixture = TestBed.createComponent(KidscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
