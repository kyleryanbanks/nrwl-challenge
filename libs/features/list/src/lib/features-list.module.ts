import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ListComponent } from './list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DataTicketsModule } from '@nrwl-challenge/data/tickets';

export const featuresListRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule,
    DataTicketsModule,
  ],
  declarations: [TicketsListComponent, TicketComponent, ListComponent],
})
export class FeaturesListModule {}
