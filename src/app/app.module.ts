import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TurnBarModule} from "./component/turn-bar/turn-bar.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TurnBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
