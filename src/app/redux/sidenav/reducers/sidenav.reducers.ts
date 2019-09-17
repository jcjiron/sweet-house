
import * as sidenavActions from '../actions/sidenav.actions';


export interface SidenavState {
    isSidenavOpen: boolean,
    isToogled: boolean,
}

export const InitialState: SidenavState = {
    isSidenavOpen: false,
    isToogled: false

}

/**Función para identificar el estado de la aplicación, si existe o no una sesión activa */
export function sidebarReducer(state = InitialState, action: sidenavActions.sidenavActions): SidenavState {
    switch (action.type) {
        case sidenavActions.TOGGLE_SIDENAV:
            return {
                ...state,
                isToogled: true
            };
        case sidenavActions.CLOSE_SIDENAV:
            return {
                ...state,
                isToogled: false,
                isSidenavOpen: false
            };
        case sidenavActions.OPEN_SIDENAV:
            return {
                ...state,
                isToogled: false,
                isSidenavOpen: true
            };


        default:
            return state;

    }
}