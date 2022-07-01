import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import { AddactivelistAction, AddlistAction } from '../../store/actions/task-manager.actions';
import { taskmanagerAction } from '../../store/actions/task-manager.actions';
import { AppState } from '../../store/models/app-state.model';
import { List } from '../../store/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  value = '';
  constructor(private router: Router, private store: Store<AppState>) { }

  submit(value: string) {
    const list = { id: uuid(), name: value };
    this.store.dispatch(new AddlistAction(list));
    this.store.dispatch(new AddactivelistAction(list.id));
    this.router.navigateByUrl('/dash-board')
  }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.value = value;
  }

  abbruch = () => {
    this.router.navigateByUrl('/dash-board')
  }
}
