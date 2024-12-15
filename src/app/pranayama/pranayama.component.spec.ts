import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranayamaComponent } from './pranayama.component';

describe('PranayamaComponent', () => {
  let component: PranayamaComponent;
  let fixture: ComponentFixture<PranayamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PranayamaComponent]
    });
    fixture = TestBed.createComponent(PranayamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
