import { Ticket } from './tickets.models';

export const createMockTicket = (overrides?: Partial<Ticket>): Ticket => ({
  assigneeId: null,
  completed: false,
  description: 'This is a mock ticket',
  id: 1,
  ...overrides,
});
