import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { props, Store } from '@ngrx/store';
import { AddtaskAction, RenameTaskAction } from '../../store/actions/task-manager.actions';
import { AppState } from '../../store/models/app-state.model';
import { getActiveList, getTaskById } from '../../store/selectors/task-manager.selectors';
import {v4 as uuid} from 'uuid';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs';
import { Task } from '../../store/models/task.model';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  private subscription!: Subscription;
  private activeList!: string;

  value1= ''
  task!:Task;
  constructor( private router: Router, private store: Store<AppState>, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.store.select(getActiveList).subscribe((activeList) => (this.activeList = activeList))
    const id = this.route.snapshot.paramMap.get('id');

    this.subscription = this.store
      .select(getTaskById, { id })  
      .subscribe((task) => (this.task = task));
  }
  abbruch = () => {
    this.router.navigateByUrl('/dash-board')
  }

  submittask(task: Task) {
    this.store.dispatch(new RenameTaskAction(this.task.id, task.name));
    this.router.navigateByUrl('/dash-board')
  }
  onChange(value: string) {
    this.value1 = value;
  }
}
