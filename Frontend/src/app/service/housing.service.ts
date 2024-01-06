import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpClient: HttpClient) {}

  getHousingProperties(SellRent?: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Property[] = [];

        const storedProperties = localStorage.getItem('newProp')
        if(storedProperties){
          const convertedProperties = JSON.parse(storedProperties)
          for (const property of convertedProperties) {
            if (SellRent !== undefined) {
              if (property.SellRent === SellRent) {
                propertiesArray.push(property);
              }
            } else {
              propertiesArray.push(property);
            }
          }
        }
       
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
  addProperty(property:Property) {
    let newProp = [property];
    const storedProperties = localStorage.getItem('newProp');
  
    if (storedProperties) {
      const props = JSON.parse(storedProperties);
      newProp = [property, ...props]; // Remove the extra array wrapping here
    }
  
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  
  newPropId() {
    const pidValue = localStorage.getItem('PID');
  
    if (pidValue) {
      const newPidValue = String(+pidValue + 1);
      localStorage.setItem('PID', newPidValue);
      return +newPidValue;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
  
}
