import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import { AddlistAction, AddtaskAction } from '../../store/actions/task-manager.actions';
import { AppState } from '../../store/models/app-state.model';
import { List } from '../../store/models/list.model';
import { getActiveList } from '../../store/selectors/task-manager.selectors';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  activeList!: string;

  value1= ''
  constructor( private router: Router, private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.store.select(getActiveList).subscribe((activeList) => (this.activeList = activeList))
  }
  abbruch = () => {
    this.router.navigateByUrl('/dash-board')
  }

  submittask(value: string) {
    const task = { id: uuid(), name: value, listId: this.activeList,};
    console.log(task);
    this.store.dispatch(new AddtaskAction(task));
    this.router.navigateByUrl('/dash-board')
  }
  onChange(value: string) {
    this.value1 = value;
  }
}
