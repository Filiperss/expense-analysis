import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Transfer } from '../models/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  public transfers: Transfer[] = []

  constructor(private httpClient: HttpClient) { }

  fetchTransfers(): void {
    this.httpClient.get(`${environment.apiUrl}/calculated-expenses`).subscribe((res: any) => {
      console.log(res);
      
    },(error) => {
      console.error('Error fetching transfers:', error);
    });
  }
}