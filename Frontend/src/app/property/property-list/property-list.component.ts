import { Component } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: any;
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getHousingProperties().subscribe((data) => {
      this.properties = data;
    });
  }
}
