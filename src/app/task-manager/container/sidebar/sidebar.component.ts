import { Component, Input, OnInit } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { NewListComponent } from '../new-list/new-list.component';
import { AddlistAction } from '../../store/actions/task-manager.actions';
import { AppState } from '../../store/models/app-state.model';
import { newlist } from '../../store/models/list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  newlists$!: Observable<newlist[]>;

  constructor(private store: Store<AppState>, private router: Router) {

  }
  ngOnInit(): void {
    this.newlists$ = this.store.select(store => store.list);
  }
  onClick = () => {
    this.router.navigateByUrl('/list/new')
  }


};


