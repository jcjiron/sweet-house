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

  isFormEnable: boolean = false;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(newSuite => {

        // if (!(newSuite.registerStep >= REGISTER_STEP2)) {
        //   this.router.navigate(['/new-suite']);
        // }

        this.state = newSuite.state;
        this.zipCode = newSuite.zipCode;
        this.suburb = newSuite.suburb;
        this.city = newSuite.city;
        this.street = newSuite.street;
        this.internalNumber = newSuite.internalNumber;
        this.externalNumber = newSuite.externalNumber;

        this.newSuiteStep2Form = new FormGroup({

          state: new FormControl({ value: this.state, disabled: !this.isFormEnable }, Validators.required),
          zipCode: new FormControl(this.zipCode, [Validators.required, Validators.minLength(5)]),
          suburb: new FormControl({ value: this.suburb, disabled: !this.isFormEnable }, Validators.required),
          city: new FormControl({ value: this.city, disabled: !this.isFormEnable }, Validators.required),
          street: new FormControl({ value: this.street, disabled: !this.isFormEnable }, Validators.required),
          internalNumber: new FormControl({ value: this.internalNumber, disabled: !this.isFormEnable }, Validators.required),
          externalNumber: new FormControl({ value: this.externalNumber, disabled: !this.isFormEnable }, Validators.required)
        });
      })

  }

  validateZipCode() {
    console.log(this.newSuiteStep2Form.controls['zipCode'].value);

    console.log(`${this.newSuiteStep2Form.controls['zipCode'].value}`, `${this.newSuiteStep2Form.controls['zipCode'].value}`.length);

    if (typeof this.newSuiteStep2Form.controls['zipCode'].value === 'number' && `${this.newSuiteStep2Form.controls['zipCode'].value}`.length >= 4) {

      this.enableForms();
    } else {
      this.disableForms();
    }
  }

  enableForms() {
    this.newSuiteStep2Form.controls['state'].enable();
    this.newSuiteStep2Form.controls['suburb'].enable();
    this.newSuiteStep2Form.controls['city'].enable();
    this.newSuiteStep2Form.controls['street'].enable();
    this.newSuiteStep2Form.controls['internalNumber'].enable();
    this.newSuiteStep2Form.controls['externalNumber'].enable();

  }

  disableForms() {
    this.newSuiteStep2Form.controls['state'].disable();
    this.newSuiteStep2Form.controls['suburb'].disable();
    this.newSuiteStep2Form.controls['city'].disable();
    this.newSuiteStep2Form.controls['street'].disable();
    this.newSuiteStep2Form.controls['internalNumber'].disable();
    this.newSuiteStep2Form.controls['externalNumber'].disable();

  }

  goToNextStep() {
    console.log(this.newSuiteStep2Form.value);

    this.store.dispatch(new NewSuiteAddressStepAction({ ...this.newSuiteStep2Form.value }));
    this.router.navigate(['new-suite/details']);
  }

  goToBackStep() {

    this.router.navigate(['new-suite']);
  }
}
