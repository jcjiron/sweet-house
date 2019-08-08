import { ActionReducerMap } from '@ngrx/store';
import * as fromSidenav from './features/sidenav/store/reducers/sidenav.reducers';
import * as fromLogin from './features/login/store/reducers/login.reducer';


/** Interface state */
export interface AppState {
    sidenav: fromSidenav.SidenavState,
    user: fromLogin.UserState
}

export const appReducers:ActionReducerMap<AppState> = {
    sidenav: fromSidenav.sidebarReducer,
    user: fromLogin.loginReducer
}