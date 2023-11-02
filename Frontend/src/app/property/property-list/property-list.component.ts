import { Component } from '@angular/core';
import { IProperty } from 'src/app/model/iproperty';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: IProperty[] = [];
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getHousingProperties().subscribe((data) => {
      this.properties = data;
    });
  }
}
