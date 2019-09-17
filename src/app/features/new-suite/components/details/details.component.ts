import { AppState } from './../../../../app.reducer';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as suiteconstant from '../../constants/new-suite.constant';
import { NewSuiteThirdStepAction } from 'src/app/redux/new-suite/actions/new-suite.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  newSuiteStep3Form: FormGroup;

  bedrooms;
  bathrooms;
  size;
  garages;
  description;


  garagesValues: any[] = [...suiteconstant.GARAGES_VALUES];
  bedroomsValues: any[] = [...suiteconstant.BEDROOM_VALUES];
  bathroomsValues: any[] = [...suiteconstant.BATHROOM_VALUES];


  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(data => {


        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.size = data.size;
        this.garages = data.garages;
        this.description = data.description;

        this.newSuiteStep3Form = new FormGroup({

          bedrooms: new FormControl(this.bedrooms, Validators.required),
          bathrooms: new FormControl(this.bathrooms, Validators.required),
          size: new FormControl(this.size, Validators.required),
          garages: new FormControl(this.garages, Validators.required),
          description: new FormControl(this.description, Validators.required),


        });

      })

  }

  goToNextStep() {
    this.store.dispatch(new NewSuiteThirdStepAction({...this.newSuiteStep3Form.value}));
    this.router.navigate(['new-suite/location'])
  }

  goToBackStep() {

    this.router.navigate(['new-suite/address']);
  }

}
