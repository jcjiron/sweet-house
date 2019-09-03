import { Action } from '@ngrx/store';


export const NEW_SUITE_FIRST_STEP = '[New suite] first step';
export const NEW_SUITE_THIRD_STEP = '[New suite] third step';
export const NEW_SUITE_FOURTH_STEP = '[New suite] location step';



export class NewSuiteFirstStepAction implements Action {
    readonly type = NEW_SUITE_FIRST_STEP;
    constructor(public payload: any) { }
}

export class NewSuiteThirdStepAction implements Action {
    readonly type = NEW_SUITE_THIRD_STEP;
    constructor(public payload: any) { }
}

export class NewSuiteFourthStepAction implements Action {
    readonly type = NEW_SUITE_FOURTH_STEP;
    constructor(public payload: any) { }
}
/**
 * Export the auth actions type
 */
export type newSuiteActions = | NewSuiteFirstStepAction
    | NewSuiteFourthStepAction
    | NewSuiteThirdStepAction;

