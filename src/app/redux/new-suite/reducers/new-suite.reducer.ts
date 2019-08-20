import { SuiteInterface } from '../../../shared/interfaces/suite.interface';

import * as fromNewSuite from '../actions/new-suite.actions';

export interface NewSuiteState extends SuiteInterface {
    registerStep:number

}

export const InitialState: NewSuiteState = {
    registerStep: 1,
    title: '',
    price: 0,
    suiteType: '', 
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    size: 0,
    garages: 0,
    description: '',
    date_at: '',
    premium:false,
    premium_at: '',
    status:false,
    photos: []
};


/**Función para identificar el estado de la aplicación, si existe o no una sesión activa */
export function newSuiteReducer(state = InitialState, action: fromNewSuite.newSuiteActions): NewSuiteState {
    switch (action.type) {
        case fromNewSuite.NEW_SUITE_FIRST_STEP:
            return {
                ...action.newSuite,
                registerStep: 2
            };

        default:
            return state;

    }
}
