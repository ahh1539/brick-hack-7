import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingComponent },
  {path: 'login', component: LoginComponent},
  {path: 'sell', component: SellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
