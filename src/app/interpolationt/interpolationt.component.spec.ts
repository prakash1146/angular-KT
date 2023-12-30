import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationtComponent } from './interpolationt.component';

describe('InterpolationtComponent', () => {
  let component: InterpolationtComponent;
  let fixture: ComponentFixture<InterpolationtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationtComponent]
    });
    fixture = TestBed.createComponent(InterpolationtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
