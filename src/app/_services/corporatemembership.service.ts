import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import { getMemberLoading,getMemberLoaded, getMembers, RootReducerState } from '../reducers';
import {combineLatest,Observable} from 'rxjs';
import { MembershipListRequestAction,MembershipListSuccesstAction } from '../actions/corporate-action';
import { environment } from '../../environments/environment';
import {Corporatemember} from '../models/corporatemember';
import {ApiService} from './api.services';
import {take} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CorporatemembershipService {

  constructor(private store: Store<RootReducerState>, private apiService: ApiService) {
  }
  
  
  getMembership(force = false): [Observable<boolean>, Observable<Corporatemember[]>] {
    const loading$ = this.store.select(getMemberLoading);
    const loaded$ = this.store.select(getMemberLoaded);
    const getMemberData$ = this.store.select(getMembers);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new MembershipListRequestAction());
        this.apiService.getAllCorporatemember().subscribe(res => {
          this.store.dispatch(new MembershipListSuccesstAction({data: res}));
        });
      }
    });
    return [loading$, getMemberData$];
  }
}
