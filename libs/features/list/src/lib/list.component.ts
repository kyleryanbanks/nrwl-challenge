import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BackendService,
  getAllTickets,
  TicketActions,
} from '@nrwl-challenge/data/tickets';

@Component({
  selector: 'nrwl-challenge-list',
  template: `
    <h2>Tickets</h2>

    <ul>
      <li *ngFor="let ticket of tickets | async">
        <nrwl-challenge-ticket
          [ticket]="ticket"
          (click)="onClick(ticket.id)"
        ></nrwl-challenge-ticket>
      </li>
    </ul>

    <input placeholder="Ticket Description" [formControl]="description" />
    <button
      (click)="onAddTicket(description.value)"
      [disabled]="newTicketPending || description.invalid"
    >
      Add Ticket
    </button>
  `,
  styles: [
    `
      li {
        list-style-type: none;
      }
    `,
  ],
})
export class ListComponent {
  tickets = this.store.select(getAllTickets);
  newTicketPending = false;

  description = new FormControl('', [Validators.required]);

  constructor(
    private store: Store,
    public backend: BackendService,
    private router: Router
  ) {}

  onClick(id: number) {
    this.router.navigate(['ticket', id]);
  }

  onAddTicket(description: string) {
    this.store.dispatch(TicketActions.createNewTicket({ description }));
    this.description.reset();
  }
}
