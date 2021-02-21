export class Listing {
    name: string;
    poster_id : string;
    description: string;
    price: number;
    image_url : string;

    public constructor(name, poster_id, description, price, image_url) {
        this.name = name;
        this.poster_id = poster_id;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
    }
  }