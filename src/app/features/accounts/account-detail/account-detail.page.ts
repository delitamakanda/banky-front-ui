import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-detail.page',
  imports: [],
  standalone: true,
  templateUrl: './account-detail.page.html',
  styleUrl: './account-detail.page.css',
})
export class AccountDetailPage {
  router = inject(Router);

  constructor(private route: ActivatedRoute) {
    const accountId = this.route.snapshot.paramMap.get('id');
    console.log('Account ID:', accountId);
  }

}
