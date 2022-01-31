import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CountryData } from '../models/country-model';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})

export class CountryDetailsComponent implements OnInit {
  cos: any;
  country: CountryData = { name: "", png: "", currencies: [] , population: "", fifa:"", capital: "", languages: {} };
  id: any;
  isDataAvailable:boolean = false;
  constructor(private http : HttpClient, private route: ActivatedRoute){ 
  }
  fetchEvent(){
    return  this.http.get(`${environment.apiUrl}name/` + this.id)
    .subscribe(Response => { 
      if(Response != null){
      this.cos = Response;
      this.country.name = this.cos[0].name.common
      this.country.png = this.cos[0].flags.png
      this.country.currencies = Object.keys(this.cos[0].currencies)//.BBD.name
      this.country.population = this.cos[0].population.toLocaleString()
      this.country.fifa = this.cos[0].cca3
      this.country.capital = this.cos[0].capital[0]
      this.country.languages=this.cos[0].languages
      } 
    })
 }
 
  ngOnInit(): void {
    localStorage.setItem("backButton", "true");
    this.id = this.route.snapshot.paramMap.get('name');
    this.fetchEvent()
  }
}
