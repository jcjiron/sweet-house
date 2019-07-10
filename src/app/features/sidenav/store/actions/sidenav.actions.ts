import { Action } from '@ngrx/store';

/**
 * action types for auth process, login, logout, open and close IDP window
 */
export const OPEN_SIDENAV = '[Sidenav] open sidenav';
export const CLOSE_SIDENAV = '[Sidenav] close sidenav';
export const TOGGLE_SIDENAV = '[Sidenav] toggle sidenav';



/**
 * Implementation of auth actions
 */
export class OpenSidenavAction implements Action { readonly type = OPEN_SIDENAV; }
export class CloseSidenavAction implements Action { readonly type = CLOSE_SIDENAV; }
export class ToogleSidenavAction implements Action { readonly type = TOGGLE_SIDENAV; }



/**
 * Export the auth actions type
 */
export type sidenavActions = OpenSidenavAction
    | CloseSidenavAction
    | ToogleSidenavAction;
