import {Corporatemember} from '../models/corporatemember';
import {Action} from '../actions';
import {MEMBERSHIP_LIST_REQUEST,MEMBERSHIP_LIST_SUCCESS} from '../actions/corporate-action';

import {createSelector} from '@ngrx/store';
export interface CorporateReducerState{
    loading:boolean;
    loaded:boolean;
    members:Corporatemember[];
}

const initialState:CorporateReducerState={
    loaded:false,
    loading:false,
    members:[]
}

export function CorporateReducer (state=initialState,action:Action): CorporateReducerState {
    switch (action.type) {
        case MEMBERSHIP_LIST_REQUEST: {
            return {...state, loading: true};
          }
          case MEMBERSHIP_LIST_SUCCESS: {
           const updateMembers = state.members.concat(action.payload.data);
            return {...state,loading:false,loaded:true,members:updateMembers }
            
          }
          default: {
            return state;
          }
    }
}

// selectors
export const getLoading = (state: CorporateReducerState) => state.loading;
export const getLoaded = (state: CorporateReducerState) => state.loaded;
export const getMembers = (state: CorporateReducerState) => state.members;