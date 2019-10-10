import { Action } from '@ngrx/store';


export const BASIC_INFORMATION_STEP = '[New suite] first step';
export const ADDRESS_STEP = '[New suite] address step';
export const NEW_SUITE_THIRD_STEP = '[New suite] third step';
export const LOCATION_STEP = '[New suite] location step';
export const PHOTOS_STEP = '[New suite] location step';




export class NewSuiteFirstStepAction implements Action {
    readonly type = BASIC_INFORMATION_STEP;
    constructor(public payload: any) { }
}

export class NewSuiteAddressStepAction implements Action {
    readonly type = ADDRESS_STEP;
    constructor(public payload: any) { }
}

export class NewSuiteThirdStepAction implements Action {
    readonly type = NEW_SUITE_THIRD_STEP;
    constructor(public payload: any) { }
}

export class NewSuiteFourthStepAction implements Action {
    readonly type = LOCATION_STEP;
    constructor(public payload: any) { }
}

export class NewSuitePhotosStepAction implements Action {
    readonly type = PHOTOS_STEP;
    constructor(public payload: any) { }
}
/**
 * Export the auth actions type
 */
export type newSuiteActions = | NewSuiteFirstStepAction
    | NewSuiteFourthStepAction
    | NewSuiteAddressStepAction
    | NewSuitePhotosStepAction 
    | NewSuiteThirdStepAction;

