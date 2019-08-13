export interface SuiteInterface {
    title?:string,
    price?:number,
    suite_type?:any, //venta o renta
    property_type?:any, //casa, departamento, otro
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
}