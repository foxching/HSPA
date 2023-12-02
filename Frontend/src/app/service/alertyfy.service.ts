import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertyfyService {
  constructor() {}

  success(msg: string) {
    alertyfy.success(msg);
  }

  warning(msg: string) {
    alertyfy.warning(msg);
  }

  error(msg: string) {
    alertyfy.error(msg);
  }
}
