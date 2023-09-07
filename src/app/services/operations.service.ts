import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  baseUrl = environment.baseUrl;

  constructor(private router: Router, private http: HttpClient) {}

  getDocuments(data: any) {
    const serviceName = '/getDocument';
    const apiUrl = `${this.baseUrl}${serviceName}`;
    const httpOptions = {
      //cors issue fix
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<any>(apiUrl, data, httpOptions);
  }

}
