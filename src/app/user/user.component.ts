import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMessage() {
    document.getElementById("myMessage").style.display = "block";
  }
  
  closeMessage() {
    document.getElementById("myMessage").style.display = "none";
  }

}
