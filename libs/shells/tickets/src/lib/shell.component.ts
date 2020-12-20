import { Component } from '@angular/core';

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
export class ShellComponent {}
