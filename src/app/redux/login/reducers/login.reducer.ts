
import * as fromLogin from '../actions/login.actions';
import { UserInterface } from 'src/app/shared/models/user.interface';

export interface UserState extends UserInterface {

}

export const InitialState: UserState = {
    photoURL: '',
    displayName: '',
    email: '',
    providerId: '',
    uid: ''
}


/**Función para identificar el estado de la aplicación, si existe o no una sesión activa */
export function loginReducer(state = InitialState, action: fromLogin.loginActions): UserState {
    switch (action.type) {
        case fromLogin.LOGIN:
        case fromLogin.SET_USER:
            return {
                ...action.user,
            };
        case fromLogin.LOGOUT:
        case fromLogin.REMOVE_USER:
            return {
                ...InitialState,
            };

        default:
            return state;

    }
}
