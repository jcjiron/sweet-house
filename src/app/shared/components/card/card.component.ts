import { SuiteInterface } from './../../models/suite.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() suite: SuiteInterface = {
    suiteType: '',
    propertyType: '',
    price: 7500,
    bedrooms: 3,
    bathrooms: 2,
    size: 76,
    description: 'Este es un cuarto muy bonito',
    date_at: '2019-08-08 13:27:41',
    premium: true,
    premium_at: '2019-08-08 13:27:41',
    status: true,
    title: 'Departamento en la narvarte',
    garages: 1,
    photos: [
      "https://via.placeholder.com/90x90.png?text=hola%20mundo",
      "https://via.placeholder.com/90x90.png?text=hola%20mundo"
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
