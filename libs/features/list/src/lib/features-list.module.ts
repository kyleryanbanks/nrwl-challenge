import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketComponent } from './components/ticket/ticket.component';

export const featuresListRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TicketsListComponent, TicketComponent],
})
export class FeaturesListModule {}
