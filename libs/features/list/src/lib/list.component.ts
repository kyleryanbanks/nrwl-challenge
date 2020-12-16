import { Component } from '@angular/core';
import { BackendService } from '@nrwl-challenge/data/tickets';

@Component({
  selector: 'nrwl-challenge-list',
  template: `
    <h2>Tickets</h2>

    <ul>
      <li *ngFor="let t of tickets | async">
        Ticket: {{ t.id }}, {{ t.description }}
      </li>
    </ul>
  `,
  styles: [],
})
export class ListComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) {}
}
