import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpClient: HttpClient) {}

  getHousingProperties() {
    return this.httpClient.get<any[]>('data/properties.json');
  }
}
