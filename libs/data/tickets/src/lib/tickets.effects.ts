import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { BackendService } from './services';
import * as TicketsActions from './tickets.actions';
import { Ticket } from './tickets.models';

@Injectable()
export class TicketsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.init),
      switchMap(() =>
        this.backend
          .tickets()
          .pipe(
            map((tickets: Ticket[]) =>
              TicketsActions.loadTicketsSuccess({ tickets: [...tickets] })
            )
          )
      )
    )
  );

  newTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.createNewTicket),
      mergeMap(({ description }) =>
        this.backend.newTicket({ description }).pipe(
          map((ticket) => TicketsActions.createTicketSuccess({ ticket })),
          catchError((error) =>
            of(TicketsActions.createTicketFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
