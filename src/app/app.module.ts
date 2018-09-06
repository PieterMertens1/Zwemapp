import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import {LesgeverComponent} from './lesgever/lesgever.component';
import {LesgeverDetailComponent} from './lesgever-detail/lesgever-detail.component';
import {LesgeverService} from "./lesgever.service";
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
      AppComponent,
      LesgeverComponent,
      LesgeverDetailComponent,
      MessagesComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
    providers: [
        LesgeverService,
        MessageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
