import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  SellRent = 1;
  properties: IProperty[] = [];
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.getHousingProperties(this.SellRent).subscribe((data) => {
      this.properties = data;
      console.log(this.route.snapshot.url.toString());
    });
  }
}
