import { SidenavState } from './store/reducers/sidenav.reducers';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
import { MzSidenavComponent } from 'ngx-materialize';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {


  @ViewChild(MzSidenavComponent)
  sidenav: MzSidenavComponent;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {

    this.store.select('sidenav')
      .subscribe((data:SidenavState)=>{
        
      })

  }

  toggleSidenav(){
    console.log(this.sidenav);
    
  }

}
