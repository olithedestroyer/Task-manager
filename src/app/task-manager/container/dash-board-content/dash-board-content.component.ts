import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Observable, Subject, takeUntil } from 'rxjs';
import { DeleteTaskAction } from '../../store/actions/task-manager.actions';
import { AppState } from '../../store/models/app-state.model';
import { Task } from '../../store/models/task.model';
import { getTasks, showNoTasksEmptyState } from '../../store/selectors/task-manager.selectors';

@Component({
  selector: 'app-dash-board-content',
  templateUrl: './dash-board-content.component.html',
  styleUrls: ['./dash-board-content.component.scss']
})
export class DashBoardContentComponent implements OnInit {
  newtask$!: Observable<Task[]>; 
  showEmptyState = true;
  private destroyed$ = new Subject<void>();

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.newtask$ = this.store.select(getTasks).pipe(takeUntil(this.destroyed$));
    this.store
      .select(showNoTasksEmptyState).pipe(takeUntil(this.destroyed$))
      .subscribe((showEmptyState) => (this.showEmptyState = showEmptyState));
    }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onNewTaskClick() {
    this.router.navigateByUrl('/task/new');
  }

 
  editTask(task: Task) {
    this.router.navigate([`/task/${task.id}`]);
  }

  toggleDone(task: Task) {
    
  }

  deleteTask(task: Task) {
    this.store.dispatch(new DeleteTaskAction(task.id));
    this.newtask$ = this.store.select(getTasks);
  }
}
