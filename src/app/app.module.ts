import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForloopTComponent } from './forloop-t/forloop-t.component';
import { InterpolationtComponent } from './interpolationt/interpolationt.component';

@NgModule({
  declarations: [
    AppComponent,
    ForloopTComponent,
    InterpolationtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
