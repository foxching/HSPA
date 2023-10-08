import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      Id: 100,
      Name: 'Rechie House',
      Type: 'House',
      Price: 1200,
    },
    {
      Id: 200,
      Name: 'Ruth House',
      Type: 'Mansion',
      Price: 100200,
    },
    {
      Id: 300,
      Name: 'Ryan House',
      Type: 'Duplex',
      Price: 9200,
    },
    {
      Id: 400,
      Name: 'Cherry House',
      Type: 'Duplex',
      Price: 7700,
    },
    {
      Id: 500,
      Name: 'Christian Jay House',
      Type: 'Duplex',
      Price: 7200,
    },
  ];
}
