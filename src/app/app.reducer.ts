import { ActionReducerMap } from '@ngrx/store';
import * as fromSidenav from './redux/sidenav/reducers/sidenav.reducers';
import * as fromLogin from './redux/login/reducers/login.reducer';
import * as fromNewSuite from './redux/new-suite/reducers/new-suite.reducer';



/** Interface state */
export interface AppState {
    sidenav: fromSidenav.SidenavState,
    user: fromLogin.UserState,
    newSuite: fromNewSuite.NewSuiteState
}

export const appReducers:ActionReducerMap<AppState> = {
    sidenav: fromSidenav.sidebarReducer,
    user: fromLogin.loginReducer,
    newSuite: fromNewSuite.newSuiteReducer
}