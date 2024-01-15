import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferencevarComponent } from './templatereferencevar.component';

describe('TemplatereferencevarComponent', () => {
  let component: TemplatereferencevarComponent;
  let fixture: ComponentFixture<TemplatereferencevarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatereferencevarComponent]
    });
    fixture = TestBed.createComponent(TemplatereferencevarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
