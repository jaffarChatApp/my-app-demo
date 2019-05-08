import { Component } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './templates/app.dashboardComponent.html',
  styleUrls: ['../assets/css/app.dashboardComponent.css']
})
export class DashboardComponent {
  pageTitle = 'Dashboard';
    
    constructor(
        public router: Router,
      	public http: Http,
      	public appComponent: AppComponent){
            //this.appComponent.activeTab = "dashboard";
    }
    
    /*Onload*/
    ngOnInit(){
        setTimeout(function(){
            //this.appComponent.getLoader(false);
        }.bind(this), 1000);
    }
}
