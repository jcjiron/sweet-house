import { AppState } from './../../../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTER_STEP2 } from '../../constants/new-suite.constant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewSuiteAddressStepAction } from 'src/app/redux/new-suite/actions/new-suite.actions';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  state: string;
  zipCode: number;
  suburb: string;
  city: string;
  street: string;
  internalNumber: number;
  externalNumber: number;

  newSuiteStep2Form: FormGroup;

  constructor(
    private router:Router,
    private store:Store<AppState>
  ) {}

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(newSuite=>{

        if (!(newSuite.registerStep >= REGISTER_STEP2)) {
          this.router.navigate(['/new-suite']);
        }

        this.state = newSuite.state;
        this.zipCode = newSuite.zipCode;
        this.suburb = newSuite.suburb;
        this.city = newSuite.city;
        this.street = newSuite.street;
        this.internalNumber = newSuite.internalNumber;
        this.externalNumber = newSuite.externalNumber;

        this.newSuiteStep2Form = new FormGroup({

          state: new FormControl(this.state, Validators.required),
          zipCode: new FormControl(this.zipCode, Validators.required),
          suburb: new FormControl(this.suburb, Validators.required),
          city: new FormControl(this.city, Validators.required),
          street: new FormControl(this.street, Validators.required),
          internalNumber: new FormControl(this.internalNumber, Validators.required),
          externalNumber: new FormControl(this.externalNumber, Validators.required)
        });
      })

  }

  goToNextStep(){
    console.log(this.newSuiteStep2Form.value);
    
    this.store.dispatch(new NewSuiteAddressStepAction({ ...this.newSuiteStep2Form.value }));
    this.router.navigate(['new-suite/details']);
  }

  goToBackStep(){

    this.router.navigate(['new-suite']);
  }
}
