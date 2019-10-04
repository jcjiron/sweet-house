import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { SuiteInterface } from 'src/app/shared/models/suite.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public newsuiteInfo:SuiteInterface;

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('newSuite')
      .subscribe(newSuite=>{
        
        this.newsuiteInfo = newSuite;
      });
  }

}
