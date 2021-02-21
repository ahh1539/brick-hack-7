import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings/listings.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  name: string = '';
  cost: number;
  condition: string = '';
  link: string;

  listings: Object;

  constructor(private _listingsService: ListingsService) { }

  ngOnInit(): void {

    this._listingsService.getListings().subscribe(data => {
      this.listings = data;
    });

  }

}
