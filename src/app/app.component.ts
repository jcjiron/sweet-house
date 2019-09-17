import { AppState } from './app.reducer';
import { Store } from '@ngrx/store';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { SetUserAction } from './redux/login/actions/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'recetas';



  constructor(
    private _ls: LocalStorageService,
    private store:Store<AppState>
  ){
    
  }

  ngOnInit(){

    const user = this._ls.get(this._ls.keys.USER);

    if (user) {

      this.store.dispatch(new SetUserAction(user));
    }

  }

}
