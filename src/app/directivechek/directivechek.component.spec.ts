import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivechekComponent } from './directivechek.component';

describe('DirectivechekComponent', () => {
  let component: DirectivechekComponent;
  let fixture: ComponentFixture<DirectivechekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivechekComponent]
    });
    fixture = TestBed.createComponent(DirectivechekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
