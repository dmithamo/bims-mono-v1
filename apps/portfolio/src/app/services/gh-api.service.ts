import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GhApiService {
  constructor(private http: HttpClient) {}

  get bioData(): Observable<unknown> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  get commitGraph() {
    return null;
  }
}
