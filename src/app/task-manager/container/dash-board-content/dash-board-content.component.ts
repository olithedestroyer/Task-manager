import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Observable, Subject, takeUntil } from 'rxjs';
import { AppState } from '../../store/models/app-state.model';
import { newtask } from '../../store/models/task.model';
import { getTasks, showNoTasksEmptyState } from '../../store/selectors/task-manager.selectors';

@Component({
  selector: 'app-dash-board-content',
  templateUrl: './dash-board-content.component.html',
  styleUrls: ['./dash-board-content.component.scss']
})
export class DashBoardContentComponent implements OnInit {

  newtask$!: Observable<newtask[]>; 
  showEmptyState = false;
  private destroyed$ = new Subject<void>();

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.newtask$ = this.store.select(store => store.tasks).pipe(takeUntil(this.destroyed$));
    this.store
      .select(showNoTasksEmptyState).pipe(takeUntil(this.destroyed$))
      .subscribe((showEmptyState) => (this.showEmptyState = showEmptyState));
      this.newtask$ = this.store.select(getTasks);
  }
  ngOnDestroy(): void {
    this.destroyed$.next();

    this.destroyed$.complete();
  }

  onNewTaskClick() {
    this.router.navigateByUrl('/task/new');
  }
}
