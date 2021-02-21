import { Component, OnInit } from '@angular/core';

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



  constructor() { }

  ngOnInit(): void {

    this.condition = 'new';
    this.cost = 2000;
    this.name = 'balenciaga X Predator';
    this.link = 'https://image.goat.com/crop/375/attachments/product_template_pictures/images/049/583/687/original/544351_W2GA1_4452.png.png';
  }

}
