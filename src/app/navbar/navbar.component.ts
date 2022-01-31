import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
import { Authentication } from '../authentication/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription = new Subscription;
  public loading: boolean = false;
  constructor( private _location: Location){//, private authentication: Authentication){ 
  //  this.subscription = authentication.newShow.subscribe(
  //    loading=>{
  //      this.loading = loading
  //    }

  //  )
  }
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    console.log(this.loading);
  }

}
