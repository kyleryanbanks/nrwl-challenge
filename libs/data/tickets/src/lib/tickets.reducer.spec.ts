import * as TicketsActions from './tickets.actions';
import { createMockTicket } from './tickets.mocks';
import { initialState, reducer, State } from './tickets.reducer';

describe('Tickets Reducer', () => {
  beforeEach(() => {});

  describe('valid Tickets actions', () => {
    it('loadTicketsSuccess should set the list of known Tickets', () => {
      const tickets = [
        createMockTicket({ id: 2 }),
        createMockTicket({ id: 3 }),
      ];
      const action = TicketsActions.loadTicketsSuccess({ tickets });

      const result: State = reducer(initialState, action);

      expect(result).toMatchInlineSnapshot(`
        Object {
          "entities": Object {
            "2": Object {
              "assigneeId": null,
              "completed": false,
              "description": "This is a mock ticket",
              "id": 2,
            },
            "3": Object {
              "assigneeId": null,
              "completed": false,
              "description": "This is a mock ticket",
              "id": 3,
            },
          },
          "ids": Array [
            2,
            3,
          ],
          "loaded": true,
        }
      `);
    });

    it('createTicketSuccess should add a ticket to the list of known Tickets', () => {
      const ticket = createMockTicket({ id: 3 });

      const action = TicketsActions.createTicketSuccess({ ticket });

      const result: State = reducer(initialState, action);

      expect(result).toMatchInlineSnapshot(`
        Object {
          "entities": Object {
            "3": Object {
              "assigneeId": null,
              "completed": false,
              "description": "This is a mock ticket",
              "id": 3,
            },
          },
          "ids": Array [
            3,
          ],
          "loaded": false,
        }
      `);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
