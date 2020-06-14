import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private data;

  constructor(public http: HttpClient) { }

  query() {
    this.http.get('http://localhost:3000/api/payloads/sensor2/last')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
