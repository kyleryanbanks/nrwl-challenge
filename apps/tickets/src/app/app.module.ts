import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellsTicketsModule } from '@nrwl-challenge/shells/tickets';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShellsTicketsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
