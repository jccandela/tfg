import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TtnService {
  private data;

  constructor(public http: HttpClient) { }

  query() {
    this.http.get('https://lora-node-jcarloscandela.data.thethingsnetwork.org/api/v2/query')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
