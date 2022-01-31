import { Component, OnInit } from '@angular/core';
import { Authentication } from '../authentication/authentication.service';
@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.css']
})
export class ContinentsListComponent implements OnInit {

  constructor(private authenticate: Authentication) { }

  ngOnInit(): void {
    this.authenticate.changeShow(false);
  }

}
