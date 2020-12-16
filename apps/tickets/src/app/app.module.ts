import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShellsTicketsModule } from '@nrwl-challenge/shells/tickets';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShellsTicketsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
