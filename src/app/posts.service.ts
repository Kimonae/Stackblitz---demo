import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  SumUp(a: number, b: number) {
    return a + b;
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
