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

  // title:string;
  // price:number;
  // suiteType?:any = suiteconstant.DEFAULT_SUITE_TYPE.id;
  // propertyType?:any = suiteconstant.DEFAULT_PROPERTY_TYPE.id;

  suiteTypes: any[] = [...suiteconstant.SUITE_TYPES];
  propertyTypes: any[] = [...suiteconstant.PROPERTY_TYPES];

  newSuiteStep1Form:FormGroup;
  
  constructor(
    private router:Router,
    private store:Store<AppState>
  ) { }

  ngOnInit() {

    this.newSuiteStep1Form = new FormGroup({

      title: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      suiteType: new FormControl(null, Validators.required),
      propertyType: new FormControl(null, Validators.required),

    });
  }

  onSuiteTypeChange(event){
    console.log(event);
    
  }

  onPropertyTypeChange(event){
    console.log(event);

  }

  /**
   * 
   */
  goToNextStep(){

    this.store.dispatch(new NewSuiteFirstStepAction({...this.newSuiteStep1Form.value}));
    this.router.navigate(['new-suite/address']);

    
  }
}
