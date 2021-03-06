import { Component } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
@Component({
  selector: 'app-profile',
  templateUrl: './templates/app.profileComponent.html',
  styleUrls: ['../assets/css/app.profileComponent.css']
})
export class ProfileComponent {
  pageTitle = 'Profile';
    
    constructor(
        public router: Router,
      	public http: Http,
      	public appComponent: AppComponent){
            //this.appComponent.activeTab = "profile";
    }
    
    /*Onload*/
    ngOnInit(){
        setTimeout(function(){
            //this.appComponent.getLoader(false);
        }.bind(this), 1000);
    }
}
