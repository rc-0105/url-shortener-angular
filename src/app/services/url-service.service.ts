import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  shortenUrl(originalUrl: string) {
    // Define el cuerpo como JSON
    const body = { url: originalUrl };

    // Configura los headers para JSON
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`${this.apiUrl}/shorten`, body, { 
      headers: headers,
      responseType: 'text' // Ajusta según lo que devuelva tu backend
    });
  }
}
