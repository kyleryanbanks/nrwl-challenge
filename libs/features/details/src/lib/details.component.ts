import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BackendService,
  DetailsService,
  Ticket,
} from '@nrwl-challenge/data/tickets';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'nrwl-challenge-details',
  template: `
    <ng-container *ngIf="selectedTicket | async as ticket; else loading">
      <h1>{{ ticket.description }}</h1>
    </ng-container>
    <ng-template #loading>
      <p>Loading ticket: {{ id }}</p>
    </ng-template>
  `,
  styles: [],
})
export class DetailsComponent implements OnInit {
  selectedTicket: Observable<Ticket>;
  id: number;

  constructor(
    private details: DetailsService,
    private activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.checkForPreloadedTicket();
  }

  checkForPreloadedTicket() {
    this.selectedTicket = this.backend
      .ticket(this.id)
      .pipe(startWith(this.details.load()));
  }
}
