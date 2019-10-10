export interface SuiteInterface {
    title?:string,
    price?:number,
    suiteType?:any, //venta o renta
    propertyType?:any, //casa, departamento, otro
    bedrooms?:number,
    bathrooms?:number,
    size?:number,
    garages?:number,
    description?:string,
    date_at?:string,
    premium?:boolean,
    premium_at?:string,
    status?:boolean,
    photos?:string[]
    latitude?:number,
    longitude?:number,
    googleAddress?:string,
    state?: string;
    zipCode?: number;
    suburb?: string;
    street?: string;
    city?: string;
    internalNumber?: number;
    externalNumber?: number;
}