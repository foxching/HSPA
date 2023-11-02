import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpClient: HttpClient) {}

  getHousingProperties(): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>('data/properties.json');
  }
}
