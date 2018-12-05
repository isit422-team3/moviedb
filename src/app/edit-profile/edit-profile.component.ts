import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((user) => this.user = user);
  }

  save() {
    this.user = {
      "name": (<HTMLInputElement>document.getElementsByName("name")[0]).value,
      "hometown": (<HTMLInputElement>document.getElementsByName("hometown")[0]).value,
      "movie": (<HTMLInputElement>document.getElementsByName("favmovie")[0]).value,
      "about": (<HTMLInputElement>document.getElementsByName("about")[0]).value
    }
  }

}
