import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import {LesgeverComponent} from './lesgever/lesgever.component';
import {LesgeverDetailComponent} from './lesgever-detail/lesgever-detail.component';


@NgModule({
  declarations: [
      AppComponent,
      LesgeverComponent,
      LesgeverDetailComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
