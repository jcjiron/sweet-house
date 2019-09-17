import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
import { ToogleSidenavAction } from '../../redux/sidenav/actions/sidenav.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {


  }

  togleSidenav(){
    
    this.store.dispatch(new ToogleSidenavAction());
  }

}
