import { SidenavState } from './store/reducers/sidenav.reducers';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
import { MzSidenavComponent } from 'ngx-materialize';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit, AfterViewInit {


  @ViewChild(MzSidenavComponent)
  sidenav: MzSidenavComponent;

  constructor(private store: Store<fromRoot.AppState>,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(()=>{
      if (this.afAuth.auth) {
        const user = this.afAuth.auth.currentUser;
        console.log(user);
        console.log(user.photoURL);

        
      }
    });

  }
  logout() {
    this.afAuth.auth.signOut();
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
