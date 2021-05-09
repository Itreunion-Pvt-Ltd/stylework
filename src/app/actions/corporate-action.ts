import {Corporatemember} from '../models/corporatemember';

export const MEMBERSHIP_LIST_REQUEST='membership_list_request';
export const MEMBERSHIP_LIST_SUCCESS='membership_list_success';

export class MembershipListRequestAction{
    readonly type=MEMBERSHIP_LIST_REQUEST;
   

}
export class MembershipListSuccesstAction{
    readonly type=MEMBERSHIP_LIST_SUCCESS;
    constructor(public payload?:{data:Corporatemember[]}){

    }

}