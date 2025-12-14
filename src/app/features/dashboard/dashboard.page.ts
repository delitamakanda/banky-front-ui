import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Card} from '../../shared/ui/card/card';
import {AccountsStore} from '../accounts/accounts.store';
import {CurrencyPipe} from '../../shared/pipes/currency-pipe';

@Component({
  standalone: true,
  selector: 'app-dashboard.page',
  imports: [RouterLink, Card, CurrencyPipe],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.css',
})
export class DashboardPage {
  private store = inject(AccountsStore);

  get totalBalance() {
    return this.store.totalBalance;
  }

  get accounts() {
    return this.store.accounts;
  }

  get loading() {
    return this.store.loading;
  }

  get error() {
    return this.store.error;
  }

  constructor() {
    // todo
  }

  refresh(): void {
    // todo
  }

  protected readonly Number = Number;
}
