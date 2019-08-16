import { HttpRequestService } from './../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { ZIP_CODE } from 'src/app/core/environment/app-urls.constant';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-suite',
  templateUrl: './new-suite.component.html',
  styleUrls: ['./new-suite.component.scss']
})
export class NewSuiteComponent implements OnInit {

  formdata

  constructor(
    private http:HttpRequestService
  ) {
    this.formdata = new FormGroup({
      title: new FormControl(),
      price: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      suburb: new FormControl(),
      street: new FormControl(),
      internalNumber: new FormControl(),
      externalNumber: new FormControl(),
      bathrooms: new FormControl(),
      bedrooms: new FormControl(),
      parkings: new FormControl(),
      size: new FormControl(),
      description: new FormControl(),
   });
  }

  ngOnInit() {

    this.http.get(ZIP_CODE)
      .subscribe(data=> console.log(data)
      )


  }

  onClickSubmit(data) {
    console.log(data);
    
  }

}
