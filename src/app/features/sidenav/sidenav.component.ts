import { SidenavState } from './store/reducers/sidenav.reducers';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
import { MzSidenavComponent } from 'ngx-materialize';
import { OpenSidenavAction, CloseSidenavAction } from './store/actions/sidenav.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit, AfterViewInit {


  @ViewChild(MzSidenavComponent)
  sidenav: MzSidenavComponent;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {

  }

  toggleSidenav(){
    this.sidenav.opened = !this.sidenav.opened;
    
  }

  ngAfterViewInit(){
    this.store.select('sidenav')
      .subscribe((data:SidenavState)=>{

        if (data.isToogled) {
        this.sidenav.opened = !this.sidenav.opened;
        }
        
      });

  }

}
