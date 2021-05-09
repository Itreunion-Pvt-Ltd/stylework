import { Component, OnInit} from '@angular/core';
import { CorporatemembershipService } from './_services/corporatemembership.service';
import {Corporatemember} from './models/corporatemember';
import {Store} from '@ngrx/store'
import { RootReducerState } from './reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

constructor(
    private corporatemembershipService: CorporatemembershipService
  ) {}

  title = 'StyleWork';


   ngOnInit() {

  const corporateMembers$ =  this.corporatemembershipService.getMembership()[1]
  corporateMembers$.subscribe(data=>{
    console.warn(data);
  })
   
  }

}
