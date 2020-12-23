import { createMockTicket } from './tickets.mocks';
import { initialState, ticketsAdapter } from './tickets.reducer';
import * as TicketsSelectors from './tickets.selectors';

describe('Tickets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTicketsId = (it) => it['id'];

  let state;

  beforeEach(() => {
    state = {
      tickets: ticketsAdapter.setAll(
        [
          createMockTicket({ id: 1 }),
          createMockTicket({ id: 2 }),
          createMockTicket({ id: 3 }),
        ],
        {
          ...initialState,
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Tickets Selectors', () => {
    it('getAllTickets() should return the list of Tickets', () => {
      const results = TicketsSelectors.getAllTickets(state);
      const selId = getTicketsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe(2);
    });

    it("getTicketsLoaded() should return the current 'loaded' status", () => {
      const result = TicketsSelectors.getTicketsLoaded(state);

      expect(result).toBe(true);
    });

    it("getTicketsError() should return the current 'error' state", () => {
      const result = TicketsSelectors.getTicketsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
