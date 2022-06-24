import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/models/app-state.model';
import { newtask } from '../../store/models/task.model';
import { showNoTasksEmptyState } from '../../store/selectors/task-manager.selectors';

@Component({
  selector: 'app-dash-board-content',
  templateUrl: './dash-board-content.component.html',
  styleUrls: ['./dash-board-content.component.scss']
})
export class DashBoardContentComponent implements OnInit {

  newtask$!: Observable<newtask[]>; 
  showEmptyState = true;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store
      .select(showNoTasksEmptyState)
      .subscribe((showEmptyState) => (this.showEmptyState = showEmptyState));
      this.newtask$ = this.store.select(store => store.tasks);
  }

  onNewTaskClick() {
    this.router.navigateByUrl('/task/new');
  }
}
