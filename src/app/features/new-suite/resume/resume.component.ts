import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { SuiteInterface } from 'src/app/shared/models/suite.interface';
<<<<<<< HEAD
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { Router } from '@angular/router';
import { NEW_SUITE_POST } from 'src/app/core/environment/app-urls.constant';
=======
import { Router } from '@angular/router';
>>>>>>> 1b9283e7c45ce7ca07e6aa3abfaea82e8c5d0b4a

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public newsuiteInfo:SuiteInterface;

  constructor(
    private store:Store<AppState>,
    private http:HttpRequestService,
    private router:Router
  ) { }

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(newSuite=>{

        this.newsuiteInfo = newSuite;
      });
  }


  postSuite(){
    this.http.post(NEW_SUITE_POST, this.newsuiteInfo)
      .subscribe(data=>{
        
        console.log(data);
        this.router.navigate(['my-suites']);
      })
  }

}
