import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailPage } from './account-detail.page';

describe('AccountDetailPage', () => {
  let component: AccountDetailPage;
  let fixture: ComponentFixture<AccountDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
