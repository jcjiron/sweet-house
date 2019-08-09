import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
import { MzSidenavComponent } from 'ngx-materialize';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { UserInterface } from 'src/app/shared/interfaces/user.interface';
import * as ls from 'src/app/shared/constants/local-storage.constant';
import { SidenavState } from './store/reducers/sidenav.reducers';
import { LoginAction, LogoutAction } from '../login/store/actions/login.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {


  @ViewChild(MzSidenavComponent)
  sidenav: MzSidenavComponent;

  user: UserInterface;

  constructor(
    private store: Store<fromRoot.AppState>,
    public afAuth: AngularFireAuth,
    private _ls:LocalStorageService) { }

  ngOnInit() {

    this.store.select('user')
      .subscribe(data=> {

        this.user = data;
      });
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(()=>{

      if (this.afAuth.auth) {

        const u : UserInterface = {
          photoURL: this.afAuth.auth.currentUser.photoURL,
          displayName: this.afAuth.auth.currentUser.displayName,
          email: this.afAuth.auth.currentUser.email,
          providerId: this.afAuth.auth.currentUser.providerId,
          uid: this.afAuth.auth.currentUser.uid
        };

        this.store.dispatch(new LoginAction(u));
        this._ls.set(ls.USER, u);
        this.sidenav.opened = false;
      }
    });

  }
  logout() {
    this.afAuth.auth.signOut()
      .then(()=>{

        this._ls.clear();
        this.store.dispatch(new LogoutAction());
        this.sidenav.opened = false;

      })
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
