import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-demo';
    
    constructor( 
        public router: Router,
        public http: Http){}
    
    
    /*Page Navigation*/
    navigateThis(event, page){
        this.router.navigate([page]);
        //this.router.navigate(['dashboard']);
    }
         
         
}
