import { createReducer, on, Action } from '@ngrx/store';

import * as TicketsActions from './tickets.actions';
import { Ticket } from './tickets.models';

export const TICKETS_FEATURE_KEY = 'tickets';

export interface State {
  selectedId?: string | number; // which Tickets record has been selected
  loaded: boolean; // has the Tickets list been loaded
  error?: string | null; // last known error (if any)
  tickets: Ticket[];
}
export interface TicketsPartialState {
  readonly [TICKETS_FEATURE_KEY]: State;
}

export const initialState = {
  loaded: false, // has the Tickets list been loaded
  tickets: [],
};

const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.loadTicketsSuccess, (state, { tickets }) => ({
    ...state,
    tickets,
  })),
  on(TicketsActions.loadTicketsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TicketsActions.createTicketsSuccess, (state, { ticket }) => ({
    ...state,
    tickets: [...state.tickets, ticket],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ticketsReducer(state, action);
}
