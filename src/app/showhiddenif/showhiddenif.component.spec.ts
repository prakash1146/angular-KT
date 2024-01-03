import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhiddenifComponent } from './showhiddenif.component';

describe('ShowhiddenifComponent', () => {
  let component: ShowhiddenifComponent;
  let fixture: ComponentFixture<ShowhiddenifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowhiddenifComponent]
    });
    fixture = TestBed.createComponent(ShowhiddenifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
