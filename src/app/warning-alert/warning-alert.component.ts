import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
    p {
      color:#ff0000;
    }
    `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
