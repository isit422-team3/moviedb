import { Component, OnInit } from '@angular/core';
import { DbClientService } from '../services/db-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userInformation;

  constructor(private db: DbClientService) { }

  ngOnInit() {
    //this.db.getUser(user.username) = this.userInformation;
    //or
    //this.db.getUser(user.username)
    //.then((data) => this.userInformation = data)
  }

  openMessage() {
    document.getElementById("myMessage").style.display = "block";
  }
  
  closeMessage() {
    document.getElementById("myMessage").style.display = "none";
  }

}
