import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketActions } from '@nrwl-challenge/data/tickets';

@Component({
  selector: 'nrwl-challenge-shell',
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        display: grid;
        justify-content: center;
      }
    `,
  ],
})
export class ShellComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(TicketActions.init());
  }
}
