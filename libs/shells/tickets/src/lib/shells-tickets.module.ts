import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ListComponent } from '@nrwl-challenge/features/list';
import { DetailsComponent } from '@nrwl-challenge/features/details';

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
  imports: [CommonModule, RouterModule.forRoot(shellsTicketsRoutes)],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellsTicketsModule {}
