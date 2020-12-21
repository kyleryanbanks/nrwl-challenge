import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getTicketById, Ticket } from '@nrwl-challenge/data/tickets';
import { Observable } from 'rxjs';

@Component({
  selector: 'nrwl-challenge-details',
  template: `
    <ng-container *ngIf="ticket | async as ticket; else loading">
      <pre>{{ ticket | json }}</pre>
    </ng-container>
    <ng-template #loading>
      <h1>Searching for Ticket: {{ id }}...</h1>
      <p>Please wait or use the link below to return to the list.</p>
    </ng-template>

    <a [routerLink]="['/tickets']">Back To List</a>
  `,
  styles: [],
})
export class DetailsComponent implements OnInit {
  ticket: Observable<Ticket>;
  id: number;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.ticket = this.store.select(getTicketById(this.id));
  }
}
