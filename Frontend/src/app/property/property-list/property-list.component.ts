import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { HousingService } from 'src/app/service/housing.service';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  SellRent = 1;
  properties: Property[] = [];
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService
      .getHousingProperties(this.SellRent)
      .subscribe((data) => {
        this.properties = data;
        // Check for a new property in local storage
        const newProperty = JSON.parse(
          localStorage.getItem('newProp') || 'null'
        );

        if (newProperty && newProperty.SellRent === this.SellRent) {
          this.properties = [newProperty, ...this.properties];
        }
        
      });
  }
}
