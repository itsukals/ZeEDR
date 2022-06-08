import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iClients } from 'src/interfaces/clients';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  public getClientsData(): Observable<iClients> {
    return this.httpClient.get<iClients>(environment.API_URL+"/client");
  }
}
