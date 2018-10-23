import { Component } from '@angular/core';
import { ApiService } from  './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc: ApiService, ) {
    this.svc.printToConsole("Got the service!");
  }

  ngOnInit() {
    this.svc.TestAPICall();
  }

  title = 'moviedb';
}
