import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings/listings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listings: Object;

  constructor(private _listingsService: ListingsService) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  searchItems(query){

    // tslint:disable-next-line:prefer-const
  this._listingsService.getListings().subscribe(data => {
  this.listings = data;
    console.log(query);
    }); 

    console.log(this.listings);

}
}
