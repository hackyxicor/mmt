export interface Hotel {
    id: number | string;
    name: string;
    image: string;
    address: Array<Address>;
    roomsAvailable: number;
    starRating: number;
    price: number;
}

export interface Address {
    area: Array<string>;
    line2: string;
    line1: string;
}