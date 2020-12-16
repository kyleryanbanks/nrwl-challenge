import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BackendService,
  getTickets,
  Ticket,
} from '@nrwl-challenge/data/tickets';

import { TicketActions } from '@nrwl-challenge/data/tickets';

@Component({
  selector: 'nrwl-challenge-list',
  template: `
    <h2>Tickets</h2>

    <ul>
      <li *ngFor="let ticket of tickets | async">
        <nrwl-challenge-ticket
          [ticket]="ticket"
          (click)="onClick(ticket)"
        ></nrwl-challenge-ticket>
      </li>
    </ul>

    <label>Ticket Description</label>
    <input [formControl]="description" />
    <button (click)="onAddTicket()" [disabled]="description.invalid">
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
export class ListComponent implements OnInit {
  tickets = this.backend.tickets();
  users = this.backend.users();

  description = new FormControl('', [Validators.required]);

  constructor(
    private backend: BackendService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(TicketActions.init());
  }

  onClick(ticket: Ticket) {
    this.store.dispatch(TicketActions.selectTicket({ ticket }));
    this.router.navigate(['tickets', ticket.id]);
  }

  onAddTicket() {
    this.store.dispatch(
      TicketActions.createNewTicket({ description: this.description.value })
    );
    this.description.reset();
  }
}
