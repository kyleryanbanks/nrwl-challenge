import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Ticket } from '../tickets.models';

@Injectable({ providedIn: 'root' })
export class DetailsService {
  _ticket: Ticket;

  save(ticket: Ticket) {
    this._ticket = ticket;
  }

  load(): Ticket {
    return this._ticket;
  }
}
