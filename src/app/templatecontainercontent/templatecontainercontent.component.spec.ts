import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecontainercontentComponent } from './templatecontainercontent.component';

describe('TemplatecontainercontentComponent', () => {
  let component: TemplatecontainercontentComponent;
  let fixture: ComponentFixture<TemplatecontainercontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatecontainercontentComponent]
    });
    fixture = TestBed.createComponent(TemplatecontainercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
