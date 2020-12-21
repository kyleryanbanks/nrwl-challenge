import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TicketsActions from './tickets.actions';
import { Ticket } from './tickets.models';

export const TICKETS_FEATURE_KEY = 'tickets';

export interface State extends EntityState<Ticket> {
  loaded: boolean; // has the Tickets list been loaded
  error?: string | null; // last known error (if any)
}

export interface TicketsPartialState {
  readonly [TICKETS_FEATURE_KEY]: State;
}

export const ticketsAdapter: EntityAdapter<Ticket> = createEntityAdapter<
  Ticket
>({ selectId: (entity) => entity.id });

export const initialState: State = ticketsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TicketsActions.loadTicketsSuccess, (state, { tickets }) =>
    ticketsAdapter.setAll(tickets, { ...state, loaded: true })
  ),
  on(TicketsActions.loadTicketsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TicketsActions.createTicketSuccess, (state, { ticket }) =>
    ticketsAdapter.addOne(ticket, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return ticketsReducer(state, action);
}
