import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient) { }

  getListings() {
    return this.http.get(baseUrl + '/api/items');
  }

  createListing(listingData) {
    console.log(listingData);
    return this.http.post('http://localhost:8080/api/items', listingData);
  }

  // private async request(method: string, url: string, data?: any) {

  //   console.log('request ' + JSON.stringify(data));
  //   const result = this.http.request(method, url, {
  //     body: data,
  //     responseType: 'json',
  //     observe: 'body',
  //   });
  //   return new Promise<any>((resolve, reject) => {
  //     result.subscribe(resolve as any, reject as any);
  //   });
  // }

  // getListings() {
  //   return this.request('get', `${baseUrl}/items`);
  // }

  // getListing(id: string) {
  //   return this.request('get', `${baseUrl}/items/${id}`);
  // }

  // updateListing(listing: Listing) {
  //   console.log('updateProduct ' + JSON.stringify(listing));
  //   return this.request('post', `${baseUrl}/items/${listing.id}`, listing);
  // }

  // deleteListing(id: string) {
  //   return this.request('delete', `${baseUrl}/items/${id}`);
  // }

}
