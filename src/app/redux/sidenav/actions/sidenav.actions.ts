import { UserInterface } from 'src/app/shared/models/user.interface';
import { Action } from '@ngrx/store';

/**
 * action types for auth process, login, logout, open and close IDP window
 */
export const TOGGLE_SIDENAV = '[Sidenav] toggle sidenav';
export const OPEN_SIDENAV = '[Sidenav] open sidenav';
export const CLOSE_SIDENAV = '[Sidenav] close sidenav';


/**
 * Implementation of auth actions
 */
export class ToogleSidenavAction implements Action { readonly type = TOGGLE_SIDENAV; }
export class OpenSidenavAction implements Action { readonly type = OPEN_SIDENAV; }
export class CloseSidenavAction implements Action { readonly type = CLOSE_SIDENAV; }


/**
 * Export the auth actions type
 */
export type sidenavActions = ToogleSidenavAction
    | OpenSidenavAction
    | CloseSidenavAction;

