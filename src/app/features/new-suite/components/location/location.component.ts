import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {


 
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
 
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router
  ) { }
 
  ngOnInit() {
    this.setCurrentLocation();
  }
 
    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }
 
 
  
  goToNextStep() {
    this.router.navigate(['new-suite/hotos'])
  }

}
