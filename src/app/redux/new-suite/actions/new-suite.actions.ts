import { Action } from '@ngrx/store';
import { NewSuiteState } from '../reducers/new-suite.reducer';


export const NEW_SUITE_FIRST_STEP = '[New suite] first step';



export class NewSuiteFirstStepAction implements Action {
    readonly type = NEW_SUITE_FIRST_STEP;
    constructor(public newSuite: NewSuiteState){}
}


/**
 * Export the auth actions type
 */
export type newSuiteActions = | NewSuiteFirstStepAction;

