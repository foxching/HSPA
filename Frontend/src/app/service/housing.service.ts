import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpClient: HttpClient) {}

  getHousingProperties(SellRent?: number): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: IProperty[] = [];

        for (const property of data) {
          if (SellRent !== undefined) {
            if (property.SellRent === SellRent) {
              propertiesArray.push(property);
            }
          } else {
            propertiesArray.push(property);
          }
        }

        return propertiesArray;
      })
    );
  }
}
