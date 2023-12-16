import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  @ViewChild('Form', { static: false }) addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  propertyView: IProperty = {
    Id:0,
    SellRent: 0,
    Name: '',
    Type: '',
    Price: ''
  };

  constructor(private router: Router) {}

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('congrats', this.addPropertyForm);
  }
}
