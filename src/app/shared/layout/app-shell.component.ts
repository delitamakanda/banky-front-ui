import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-shell',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app-shell.component.html',
})
export class AppShellComponent {

}
