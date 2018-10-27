import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="side">
      <h3>Im a Sidebar Component</h3>
      <a routerLink="dashboard">Dashboard</a>
      <a routerLink="students">Students</a>
      <a routerLink="tasks">Tasks</a>
      <a routerLink="admin">Admin</a>
    </div>
  `,
  styles: [`
  .side {
    padding: 20px;
    width: 300px;
    height: 500px;
    background: #5f9757;
    font-weight: 600;
  }
  `]
})
export class SidebarComponent {

}
