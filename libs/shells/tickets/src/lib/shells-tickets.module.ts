import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ListComponent } from '@nrwl-challenge/features/list';
import { DetailsComponent } from '@nrwl-challenge/features/details';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataTicketsModule } from '@nrwl-challenge/data/tickets';

export const shellsTicketsRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tickets',
  },
  {
    path: 'tickets',
    component: ListComponent,
  },
  {
    path: 'tickets/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    DataTicketsModule,
    RouterModule.forRoot(shellsTicketsRoutes),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellsTicketsModule {}
