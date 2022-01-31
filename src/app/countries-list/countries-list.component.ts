import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Authentication } from '../authentication/authentication.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  countryList:any;
  countries= [];
  id: any;
  constructor(private http : HttpClient, private route: ActivatedRoute, private authenticate: Authentication){ 
  }

  ngOnInit(): void {
    this.authenticate.changeShow(true);
    localStorage.setItem("backButton", "true");
    this.id = this.route.snapshot.paramMap.get('continent');
    this.http.get(`${environment.apiUrl}region/` + this.id)
    .subscribe(Response => { 
      if(Response != null){
      this.countryList = Response;
      } 
    }); 
  }

}
