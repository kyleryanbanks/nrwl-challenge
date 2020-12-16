import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '@nrwl-challenge/data/tickets';

@Component({
  selector: 'nrwl-challenge-ticket',
  template: ` Ticket: {{ ticket.id }}, {{ ticket.description }} `,
  styles: [
    `
      :host {
        border-style: solid;
        border-color: red;
      }
    `,
  ],
})
export class TicketComponent {
  @Input() ticket: Ticket;
}
