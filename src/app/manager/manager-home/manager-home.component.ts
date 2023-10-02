import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-home',
  template: `
    <p>
      manager-home works!
    </p>
  `,
  styles: [
  ]
})
export class ManagerHomeComponent {
  constructor() {
    console.log("ManagerHomeComponent");
  }
}
