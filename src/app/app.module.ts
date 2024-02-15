import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VariablesComponent } from './variables/variables.component';
import { VariablesParentComponent } from './variables/variables.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    VariablesParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
