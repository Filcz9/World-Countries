import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'continents' },
    {path:'continents', children:[
      {path:'', pathMatch:'full', component: ContinentsListComponent},
        { path: ':continent', children: [
          { path: '', pathMatch: 'full', component: CountriesListComponent},
            {path:':name', children:[
              {path:'', pathMatch:'full', component: CountryDetailsComponent},
            ]},
          ]},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
