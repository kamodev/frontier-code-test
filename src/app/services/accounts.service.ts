import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account } from '../models/account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private API_URL = 'https://frontiercodingtests.azurewebsites.net/api/accounts/getall';
  
  constructor(private http: HttpClient) {}

  public loadAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.API_URL);
  }
}
