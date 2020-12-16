import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TICKETS_FEATURE_KEY,
  State,
  TicketsPartialState,
} from './tickets.reducer';

// Lookup the 'Tickets' feature state managed by NgRx
export const getTicketsState = createFeatureSelector<
  TicketsPartialState,
  State
>(TICKETS_FEATURE_KEY);

export const getTicketsLoaded = createSelector(
  getTicketsState,
  (state: State) => state.loaded
);

export const getTicketsError = createSelector(
  getTicketsState,
  (state: State) => state.error
);

export const getTickets = createSelector(
  getTicketsState,
  (state: State) => state.tickets
);
