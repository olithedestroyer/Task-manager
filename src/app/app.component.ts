import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './task-manager/store/models/app-state.model';
import { newlist } from './task-manager/store/models/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
ngOnInit(): void {
  this.newlist$ = this.store.select(store => store.list)
}
  newlists$!: Observable<Array<newlist>>; 

  title = 'angular';

  newlist$:Observable<Array<newlist>> | undefined
  constructor(private store: Store<AppState>){
    
  }
}
