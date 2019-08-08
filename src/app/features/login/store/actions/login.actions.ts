import { Action } from '@ngrx/store';
import { UserState } from '../reducers/login.reducer';


export const LOGIN = '[Login] login';
export const LOGOUT = '[Login] logout';
export const SET_USER = '[Login] set user';
export const REMOVE_USER = '[Login] remove user';


export class LogoutAction implements Action { readonly type = LOGOUT; }
export class RemoveUserAction implements Action { readonly type = REMOVE_USER; }

export class SetUserAction implements Action {
    readonly type = SET_USER;
    constructor(public user: UserState){}
}

export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public user: UserState){}
}

/**
 * Export the auth actions type
 */
export type loginActions = | LoginAction
    | LogoutAction
    | SetUserAction
    | RemoveUserAction;

