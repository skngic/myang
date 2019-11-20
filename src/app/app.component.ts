import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayDetails = false;
  userName = '';
  visible = "none";

  constructor() {

  } 

  delUserName() {
    this.userName = '';
  }

}