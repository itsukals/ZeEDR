import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { iVirustotal } from 'src/interfaces/virustotal';

@Injectable({
  providedIn: 'root'
})
export class VirustotalService {
  constructor(private httpClient: HttpClient) { }

  public getVirusTotalData(hash_id: string): Observable<iVirustotal> {
    let params = new HttpParams();
    params = params.append("hash", hash_id);

    return this.httpClient.get<iVirustotal>(environment.API_URL+"/info/vt", { params: params });
  }
}
