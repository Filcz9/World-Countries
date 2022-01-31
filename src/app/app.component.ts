import { Component, NgModule, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Authentication } from './authentication/authentication.service';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WorldCountries';
  back = localStorage.getItem("backButton");
  subscription: Subscription = new Subscription;
  public loading: boolean = false;
  constructor( private _location: Location, private authentication: Authentication, private changeDetector: ChangeDetectorRef){ 
    this.subscription = authentication.newShow.subscribe(
      loading=>{
        this.loading = loading
      }

    )
  }
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {

    console.log(this.loading);
  }
  ngAfterContentChecked() {
    this.changeDetector.detectChanges();
  }

}
export class NgbdDropdownBasic {
}
