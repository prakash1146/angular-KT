import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecComponent } from './pipec.component';

describe('PipecComponent', () => {
  let component: PipecComponent;
  let fixture: ComponentFixture<PipecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipecComponent]
    });
    fixture = TestBed.createComponent(PipecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
