import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefParentComponent } from './templateref-parent.component';

describe('TemplaterefParentComponent', () => {
  let component: TemplaterefParentComponent;
  let fixture: ComponentFixture<TemplaterefParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplaterefParentComponent]
    });
    fixture = TestBed.createComponent(TemplaterefParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
