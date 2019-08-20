import { AppState } from './../../../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTER_STEP2 } from '../../constants/new-suite.constant';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(
    private router:Router,
    private store:Store<AppState>
  ) {}

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(newSuite=>{

        // if (newSuite.registerStep < REGISTER_STEP2) {
        //   this.router.navigate(['/new-suite']);
        // }
      })

  }

  goToNextStep(){
    this.router.navigate(['new-suite/details']);
  }

  goToBackStep(){

    this.router.navigate(['new-suite']);
  }
}
