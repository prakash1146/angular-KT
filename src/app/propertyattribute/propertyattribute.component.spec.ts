import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyattributeComponent } from './propertyattribute.component';

describe('PropertyattributeComponent', () => {
  let component: PropertyattributeComponent;
  let fixture: ComponentFixture<PropertyattributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyattributeComponent]
    });
    fixture = TestBed.createComponent(PropertyattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
