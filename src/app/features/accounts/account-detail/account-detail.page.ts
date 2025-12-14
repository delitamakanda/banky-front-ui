import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AccountsStore} from '../accounts.store';
import {CurrencyPipe} from '../../../shared/pipes/currency-pipe';
import {Card} from '../../../shared/ui/card/card';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-account-detail.page',
  imports: [
    FormsModule,
    CurrencyPipe,
    Card,
  ],
  standalone: true,
  templateUrl: './account-detail.page.html',
  styleUrl: './account-detail.page.css',
})
export class AccountDetailPage {
  router = inject(Router);
  store = inject(AccountsStore);

  amount = 0
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {}

  get balance() {
    return this.store.accounts().find(account => account.id === Number(this.route.snapshot.paramMap.get('id')))?.balance;
  }

  deposit(): void {
    this.execute('deposit', of(this.amount));
  }

  withdraw(): void {
    this.execute(
      'withdrawal',
      of(this.amount),
    );
  }

  private execute(operation: 'withdrawal' | 'deposit', obs: Observable<any>): void {
    this.loading.set(true);
    this.error.set(null);

    // Simulate network delay
    setTimeout(() => {
      if (this.amount <= 0 || this.amount > this.balance) {
        this.error.set('Invalid amount');
        this.loading.set(false);
        return;
      }

      obs.subscribe({
        next: () => {
          this.store.updateAccountBalance(
            operation,
            Number(this.route.snapshot.paramMap.get('id')),
            this.amount,
          )
          this.amount = 0;
          this.store.refresh();
        },
        error: (err: any) => {
          this.error.set(err.message);
        },
        complete: () => this.loading.set(false)
      })



      this.loading.set(false);
    }, 0);
  }

}
