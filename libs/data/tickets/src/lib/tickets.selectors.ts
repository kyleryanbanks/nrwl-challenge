import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TICKETS_FEATURE_KEY,
  State,
  TicketsPartialState,
  ticketsAdapter,
} from './tickets.reducer';

// Lookup the 'Tickets' feature state managed by NgRx
export const getTicketsState = createFeatureSelector<
  TicketsPartialState,
  State
>(TICKETS_FEATURE_KEY);

const { selectAll, selectEntities } = ticketsAdapter.getSelectors();

export const getTicketsLoaded = createSelector(
  getTicketsState,
  (state: State) => state.loaded
);

export const getTicketsError = createSelector(
  getTicketsState,
  (state: State) => state.error
);

export const getAllTickets = createSelector(getTicketsState, (state: State) =>
  selectAll(state)
);

export const getTicketsEntities = createSelector(
  getTicketsState,
  (state: State) => selectEntities(state)
);

export const getTicketById = (id: number) =>
  createSelector(getTicketsEntities, (entites) => entites[id]);
