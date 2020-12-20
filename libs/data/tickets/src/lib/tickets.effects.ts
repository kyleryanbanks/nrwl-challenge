import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
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
              TicketsActions.loadTicketsSuccess({ tickets })
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
