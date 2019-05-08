import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './app.dashboardComponent';
import { ProfileComponent } from './app.profileComponent';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent  
  ],
  imports: [
    BrowserModule,
    HttpModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
