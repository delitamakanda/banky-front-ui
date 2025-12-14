import { Injectable, computed, signal, inject } from '@angular/core';
import { finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountsStore {
  private _loading = signal(false);
  private _accounts = signal<any[]>([
    // Sample data
    { id: 1, name: 'Account 1', balance: 1000 },
    { id: 2, name: 'Account 2', balance: 2000 },
    { id: 3, name: 'Account 3', balance: 3000 },
  ]);
  private _error = signal<string | null>(null);

  loading = this._loading.asReadonly();
  accounts = this._accounts.asReadonly();
  error = this._error.asReadonly();

  totalBalance = computed(() => this.accounts().reduce((acc, curr) => acc + curr.balance, 0));

  refresh(): void {
    // todo
  }

  updateAccountBalance(operation: 'withdrawal' | 'deposit', id: number, amount: number): void {
    setTimeout(() => {
      const account = this.accounts().find(acc => acc.id === id);
      if (account) {
        if (operation === 'withdrawal' && account.balance < amount) {
          this._error.set('Insufficient funds');
          return;
        }
        if (operation === 'deposit' && amount <= 0) {
          this._error.set('Invalid deposit amount');
          return;
        }
        if (operation === 'withdrawal') {
          account.balance -= amount;
        } else {
          account.balance += amount;
        }
        this._accounts.update(
          () => [...this.accounts()],
        );
      }
    }, 0);
  }
}
