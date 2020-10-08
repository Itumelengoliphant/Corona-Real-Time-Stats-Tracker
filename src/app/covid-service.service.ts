import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }
}
