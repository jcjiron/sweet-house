import { SidenavState } from './features/sidenav/store/reducers/sidenav.reducers';
import { ActionReducerMap } from '@ngrx/store';
import * as fromSidenav from './features/sidenav/store/reducers/sidenav.reducers';


/** Interface state */
export interface AppState {
    sidenav: SidenavState
}

export const appReducers:ActionReducerMap<AppState> = {
    sidenav: fromSidenav.sidebarReducer
}