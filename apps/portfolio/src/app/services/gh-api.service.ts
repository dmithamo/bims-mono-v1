import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GhApiService {
  constructor(private http: HttpClient) {}

  get biodata(): Observable<unknown> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  get commitGraph() {
    return null;
  }
}
