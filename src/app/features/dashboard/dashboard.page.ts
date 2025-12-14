import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Card} from '../../shared/ui/card/card';

@Component({
  standalone: true,
  selector: 'app-dashboard.page',
  imports: [RouterLink, Card],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.css',
})
export class DashboardPage {

}
