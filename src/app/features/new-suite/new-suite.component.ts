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
  ) {}

  ngOnInit() {


  }



}
