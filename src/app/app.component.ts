import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe],
})
export class AppComponent {
  title = 'practice-app1';
  date = Date.now();
  LOCALE_ID = LOCALE_ID;
  welcome: string = 'Hello World!';
  PI = 3.1415;
  money = 5.6;
  persentage = 0.3;

  constructor(private datePipe: DatePipe) {}

  dateFromPipe(
    value: any,
    format?: string,
    timezone?: string,
    locale?: string
  ) {
    return this.datePipe.transform(value, format, timezone, locale);
  }

  
}
