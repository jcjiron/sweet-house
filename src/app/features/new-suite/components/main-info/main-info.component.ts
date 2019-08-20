import { NewSuiteFirstStepAction } from './../../../../redux/new-suite/actions/new-suite.actions';
import * as suiteconstant from './../../constants/new-suite.constant';
import { AppState } from './../../../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  title:string;
  price:number;
  suiteType:string;
  propertyType:string;


  suiteTypes: any[] = [...suiteconstant.SUITE_TYPES];
  propertyTypes: any[] = [...suiteconstant.PROPERTY_TYPES];

  newSuiteStep1Form:FormGroup;
  
  constructor(
    private router:Router,
    private store:Store<AppState>
  ) {

  }

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(data=>{
        this.title = data.title;
        this.price = data.price;
        this.suiteType = data.suiteType;
        this.propertyType = data.propertyType;

        this.newSuiteStep1Form = new FormGroup({

          title: new FormControl(this.title, Validators.required),
          price: new FormControl(this.price, Validators.required),
          suiteType: new FormControl(this.suiteType, Validators.required),
          propertyType: new FormControl(this.propertyType, Validators.required),
    
        });

      })


  }

  onSuiteTypeChange(event){
    
  }

  onPropertyTypeChange(event){

  }

  /**
   * 
   */
  goToNextStep(){

    this.store.dispatch(new NewSuiteFirstStepAction({...this.newSuiteStep1Form.value}));
    this.router.navigate(['new-suite/address']);

    
  }
}
