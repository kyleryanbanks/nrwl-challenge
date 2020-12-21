import { createAction, props } from '@ngrx/store';
import { Ticket } from './tickets.models';

export const init = createAction('[Tickets Page] Init');

export const loadTicketsSuccess = createAction(
  '[Tickets/API] Load Tickets Success',
  props<{ tickets: Ticket[] }>()
);

export const loadTicketsFailure = createAction(
  '[Tickets/API] Load Tickets Failure',
  props<{ error: any }>()
);

export const createNewTicket = createAction(
  '[Tickets] Create New Ticket',
  props<{ description: string }>()
);

export const createTicketsSuccess = createAction(
  '[Tickets/API] Load Tickets Success',
  props<{ ticket: Ticket }>()
);

export const completeTicket = createAction(
  '[Tickets] Complete Ticket',
  props<{ id: number }>()
);

export const assignTicket = createAction(
  '[Tickets] Assign Ticket To User',
  props<{ ticketId: number; userId: number }>()
);

export const updateFilters = createAction(
  '[Tickets] Update Filters',
  props<{ filters: any }>()
);
