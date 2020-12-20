import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  BackendService,
  DetailsService,
  Ticket,
} from '@nrwl-challenge/data/tickets';

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

    <input placeholder="Ticket Description" [formControl]="description" />
    <button
      (click)="onAddTicket()"
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
  tickets = this.backend.tickets();
  users = this.backend.users();
  newTicketPending = false;

  description = new FormControl('', [Validators.required]);

  constructor(
    public backend: BackendService,
    private router: Router,
    private details: DetailsService
  ) {}

  onClick(ticket: Ticket) {
    this.details.save(ticket);
    this.router.navigate(['ticket', ticket.id]);
  }

  onAddTicket() {
    if (!this.newTicketPending) {
      this.description.disable();
      this.newTicketPending = true;

      this.backend
        .newTicket({ description: this.description.value })
        .subscribe(() => {
          this.description.reset();
          this.description.enable();
          this.newTicketPending = false;
        });
    }
  }
}
