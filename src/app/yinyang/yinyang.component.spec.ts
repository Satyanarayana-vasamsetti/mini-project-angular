import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YinyangComponent } from './yinyang.component';

describe('YinyangComponent', () => {
  let component: YinyangComponent;
  let fixture: ComponentFixture<YinyangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YinyangComponent]
    });
    fixture = TestBed.createComponent(YinyangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
