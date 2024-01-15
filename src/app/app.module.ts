import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForloopTComponent } from './forloop-t/forloop-t.component';
import { InterpolationtComponent } from './interpolationt/interpolationt.component';
import { ShowhiddenifComponent } from './showhiddenif/showhiddenif.component';
import { PropertyattributeComponent } from './propertyattribute/propertyattribute.component';
import { FormsModule } from '@angular/forms';
import { StyleclassComponent } from './styleclass/styleclass.component';
import { TemplatereferencevarComponent } from './templatereferencevar/templatereferencevar.component';
import { TemplaterefParentComponent } from './templateref-parent/templateref-parent.component';
import { TemplaterefChildComponent } from './templateref-child/templateref-child.component';
import { TemplatecontainercontentComponent } from './templatecontainercontent/templatecontainercontent.component';
import { DirectivechekComponent } from './directivechek/directivechek.component';
import { BgcolorDirective } from './bgcolor.directive';
import { UserendererDirective } from './userenderer.directive';
import { HostbinddDirective } from './hostbindd.directive';
import { PipektPipe } from './pipekt.pipe';
import { PipecComponent } from './pipec/pipec.component';
import { PipelimitPipe } from './pipelimit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForloopTComponent,
    InterpolationtComponent,
    ShowhiddenifComponent,
    PropertyattributeComponent,
    StyleclassComponent,
    TemplatereferencevarComponent,
    TemplaterefParentComponent,
    TemplaterefChildComponent,
    TemplatecontainercontentComponent,
    DirectivechekComponent,
    BgcolorDirective,
    UserendererDirective,
    HostbinddDirective,
    PipektPipe,
    PipecComponent,
    PipelimitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
