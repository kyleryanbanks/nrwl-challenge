import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTickets from './/tickets.reducer';
import { TicketsEffects } from './/tickets.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTickets.TICKETS_FEATURE_KEY,
      fromTickets.reducer
    ),
    EffectsModule.forFeature([TicketsEffects]),
  ],
})
export class DataTicketsModule {}
