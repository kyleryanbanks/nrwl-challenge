import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createMockTicket } from '@nrwl-challenge/data/tickets';

import { TicketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    component.ticket = createMockTicket();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should display the provided ticket', () => {
    fixture.detectChanges();

    expect(fixture).toMatchInlineSnapshot(`
      <nrwl-challenge-ticket
        ticket={[Function Object]}
      >
         Ticket: 1, This is a mock ticket 
      </nrwl-challenge-ticket>
    `);
  });
});
