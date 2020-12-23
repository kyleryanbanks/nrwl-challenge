import { TestBed, async } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TicketsEffects } from './tickets.effects';
import * as TicketsActions from './tickets.actions';
import { BackendService } from './services';

describe('TicketsEffects', () => {
  let actions$: Observable<any>;
  let effects: TicketsEffects;
  let backend: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TicketsEffects,
        DataPersistence,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TicketsEffects);
    backend = TestBed.inject(BackendService);
  });

  describe('init$', () => {
    it('should work', (done) => {
      backend.tickets = () => of([]);
      const mockAction = TicketsActions.init();
      const expectedAction = TicketsActions.loadTicketsSuccess({ tickets: [] });

      actions$ = of(mockAction);

      effects.init$.subscribe((action) => {
        expect(action).toEqual(expectedAction);
        done();
      });
    });
  });
});
