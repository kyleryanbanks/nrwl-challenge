import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TicketsActions from './tickets.actions';
import { BackendService } from './services/backend.service';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class TicketsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.init),
      fetch({
        run: (action) => {
          console.log('in init');
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TicketsActions.loadTicketsSuccess({
            tickets: this.backend.storedTickets,
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TicketsActions.loadTicketsFailure({ error });
        },
      })
    )
  );

  @Effect({ dispatch: false })
  create$ = this.actions$.pipe(
    ofType(TicketsActions.createNewTicket),
    mergeMap(({ description }) => this.backend.newTicket({ description }))
  );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
