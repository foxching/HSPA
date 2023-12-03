import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  @ViewChild('Form', { static: false }) addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;

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
