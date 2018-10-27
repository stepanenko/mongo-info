import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dash">
      <h1>Im a Dashboard Component</h1>
    </div>
  `,
  styles: [`
    .dash {
      background: red;
      padding: 20px;
      width: 500px;
      height: 300px;
    }
  `]
})
export class DashboardComponent {

}
