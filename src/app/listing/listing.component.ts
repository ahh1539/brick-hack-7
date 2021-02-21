import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings/listings.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  items: Object;

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.listingsService.getListings().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

}
