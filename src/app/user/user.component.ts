import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user;
  followers = 21;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe((user) => this.user = user);
    console.log(this.user.name);
    if (this.user.name == undefined) {
      this.user = {
        "name": "FirstName LastName",
        "hometown": "Hometown",
        "movie": "Favorite Movie",
        "about": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce wisi."+
        "Donec vitae arcu. Donec quis nibh at felis congue commodo. Cras pede libero,"+
        "dapibus nec, pretium sit amet, tempor quis. Maecenas libero. Duis sapien nunc,"+
        "commodo et, interdum suscipit, sollicitudin et, dolor. Nullam feugiat,"+
        "turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum"+
        "odio risus sit amet ante. Nunc dapibus tortor vel mi dapibus sollicitudin."+
        "Aliquam id dolor. Duis condimentum augue id magna semper rutrum."
      }
  }else {
    console.log("bottom");
    this.route.queryParams.subscribe((user) => this.user = user);
  }
  }

  ngOnInit() {
    
  }

  openMessage() {
    document.getElementById("myMessage").style.display = "block";
  }
  
  closeMessage() {
    document.getElementById("myMessage").style.display = "none";
  }

  follow() {
    this.followers = this.followers + 1;
  }

}
