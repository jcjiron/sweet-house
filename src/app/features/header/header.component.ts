import { SidenavState } from './../sidenav/store/reducers/sidenav.reducers';
import { CloseSidenavAction, OpenSidenavAction } from './../sidenav/store/actions/sidenav.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isOpenSidenav:boolean = false;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {

    this.store.select('sidenav')
      .subscribe((data:SidenavState)=>{
        this.isOpenSidenav = data.isSidenavOpen;
        
      });

  }

  togleSidenav(){
    if(this.isOpenSidenav){
      this.store.dispatch(new CloseSidenavAction());
    }else{
      this.store.dispatch(new OpenSidenavAction());
    }
  }

}
