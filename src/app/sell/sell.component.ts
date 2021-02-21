import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings/listings.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  constructor(private listingsService: ListingsService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  
  makeListing(val){
    if (this.cookieService.get('email')) {
      val.poster_email = this.cookieService.get('email');
      this.listingsService.createListing(val).subscribe(data => {
        console.log(data);
      });
    }
  }

}
