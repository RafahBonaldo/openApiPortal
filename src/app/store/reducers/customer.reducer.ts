import {ActionEx, CustomerActionTypes} from '../actions/customer.actions';

export const initialState = [];

export function CustomerReducer(state = initialState, action: ActionEx) {
    switch(action.type) {
        case CustomerActionTypes.Add:
            return [...state, action.payload];
        case CustomerActionTypes.Add:
            return [...state, action.payload];
        case CustomerActionTypes.Remove:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];    
        default:
            return state;    
    }
}