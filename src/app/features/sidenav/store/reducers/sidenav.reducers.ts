import * as fromSidenav from '../actions/sidenav.actions';


export interface SidenavState {
    isSidenavOpen: boolean
}

export const InitialState: SidenavState = {
    isSidenavOpen: false
}

/**Función para identificar el estado de la aplicación, si existe o no una sesión activa */
export function sidebarReducer(state = InitialState, action: fromSidenav.sidenavActions): SidenavState {
    switch (action.type) {
        case fromSidenav.OPEN_SIDENAV:
            return {
                ...state,
                isSidenavOpen: true
            };
        case fromSidenav.CLOSE_SIDENAV:
            return {
                ...state,
                isSidenavOpen: false
            };
        case fromSidenav.TOGGLE_SIDENAV:
            return {
                ...state,
                isSidenavOpen: false
            };

        default:
            return state;

    }
}