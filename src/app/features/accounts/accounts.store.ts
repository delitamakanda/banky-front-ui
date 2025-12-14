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
}
