import { Component, OnInit, Input } from '@angular/core';

// Custom service import
import { AccountsService } from '../services/accounts.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  @Input() status: string;

  private accounts: Account[];

  constructor(private accountSvc: AccountsService) { }

  ngOnInit() {
    
    // TODO: Work with team to determine the best design pattern
    this.accountSvc.loadAccounts().subscribe((accountList) => {
      this.accounts = accountList.filter(account => account.AccountStatusId === Number(this.status));
    });
  }
}
