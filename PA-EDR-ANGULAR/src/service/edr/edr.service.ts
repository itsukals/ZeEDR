import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEdr } from 'src/interfaces/i-edr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EdrService {
  constructor(private httpClient: HttpClient) { }

  public getEdrData(params: HttpParams): Observable<iEdr> {
    return this.httpClient.get<iEdr>(environment.API_URL+"/edr", { params: params });
  }
}
