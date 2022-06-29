import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state.model';
import { showNoListsEmptyState } from '../../store/selectors/task-manager.selectors';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit, OnDestroy {
  showEmptyState = false;
  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(showNoListsEmptyState)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((showEmptyState) => {
        this.showEmptyState = showEmptyState;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();

    this.destroyed$.complete();
  }
}
