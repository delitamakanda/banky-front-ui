import { Routes } from '@angular/router';
import { authGuard} from './core/auth/auth.guard';
import { AppShellComponent } from './shared/layout/app-shell.component';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/auth/login.page').then(m => m.LoginPage) },
  { path: '', component: AppShellComponent, canActivate: [authGuard], children: [
      { path: '',  canActivate: [authGuard], loadComponent: () => import('./features/dashboard/dashboard.page').then(m => m.DashboardPage) },
      { path: 'account/:id', canActivate: [authGuard], loadComponent: () => import('./features/accounts/account-detail/account-detail.page').then(m => m.AccountDetailPage) },
      { path:'settings', canActivate: [authGuard], loadComponent: () => import('./features/settings/settings.page').then(m => m.SettingsPage) },
    ] },

  { path: '**', redirectTo: '' }
];
