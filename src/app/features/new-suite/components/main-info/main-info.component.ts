import { AppState } from './../../../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  title:string;
  price:number;
  suiteType?:any
  propertyType?:any

  constructor(
    private router:Router,
    private store:Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(suite=>{

        // this.title = suite.title;
        // this.price = suite.price;
        // this.suiteType = suite.suiteType;
        // this.propertyType = suite.propertyType;

      })
  }

  /**
   * 
   */
  goToNextStep(){
    this.router.navigate(['new-suite/address'])
  }
}
