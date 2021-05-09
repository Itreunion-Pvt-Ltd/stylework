import * as fromMember from './corporate-reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';

export interface RootReducerState {
  members: fromMember.CorporateReducerState;
  
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  members: fromMember.CorporateReducer
};

export const getMemberState = (state: RootReducerState) => state.members;

export const getMemberLoaded = createSelector(getMemberState, fromMember.getLoaded);
export const getMemberLoading = createSelector(getMemberState, fromMember.getLoading);

export const getMembers = createSelector(getMemberState, fromMember.getMembers);