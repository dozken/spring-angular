import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  send() {
    return this.http.post('/api/send', { input: '#when go?' }); // Replace with your API endpoint
  }

  wrongSend() {
    return this.http.post('/api/send', { input: '#when go?' }, {
      headers: {
        "X-XSRF-TOKEN": "wrong token"
      }
    }); // Replace with your API endpoint
  }

  homeRoute() {
    return this.http.get('/api/'); // Replace with your API endpoint
  }
}
