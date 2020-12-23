import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TicketActions } from '@nrwl-challenge/data/tickets';
import { TicketComponent } from './components/ticket/ticket.component';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [ListComponent, TicketComponent],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch actions to create new tickets', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const mockDescription = 'Mock Description';
    const mockAction = TicketActions.createNewTicket({
      description: mockDescription,
    });

    component.onAddTicket(mockDescription);

    expect(dispatchSpy).toHaveBeenCalledWith(mockAction);
  });

  it('should navigate to the details page', () => {
    const routerSpy = jest.spyOn(router, 'navigate').mockResolvedValue(true);
    const mockId = 4;

    component.onClick(mockId);

    expect(routerSpy).toHaveBeenCalledWith(['ticket', mockId]);
  });
});
