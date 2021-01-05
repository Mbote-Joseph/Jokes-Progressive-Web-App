import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JokesService {
  constructor(handler: HttpBackend, private http: HttpClient) {
    this.http = new HttpClient(handler);
  }

  getRandomJokes(): Observable<any> {
    return this.http.get(`${environment.api_url}/jokes/random/25`);
  }
}
