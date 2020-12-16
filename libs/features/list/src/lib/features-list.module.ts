import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';

export const featuresListRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TicketsListComponent],
})
export class FeaturesListModule {}
