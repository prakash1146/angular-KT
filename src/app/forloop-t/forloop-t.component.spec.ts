import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopTComponent } from './forloop-t.component';

describe('ForloopTComponent', () => {
  let component: ForloopTComponent;
  let fixture: ComponentFixture<ForloopTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForloopTComponent]
    });
    fixture = TestBed.createComponent(ForloopTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
