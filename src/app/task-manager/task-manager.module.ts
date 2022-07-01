import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './container/dash-board/dash-board.component'; 
import { NewListComponent } from './container/new-list/new-list.component'; 
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { listReducer } from './store/reducers/list.reducer';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { NewTaskComponent } from './container/new-task/new-task.component';
import { DashBoardContentComponent } from './container/dash-board-content/dash-board-content.component';
import { activeListReducer, taskReducer } from './store/reducers/task.reducer';
import { TaskComponent } from './components/task/task.component';
import { EditTaskComponent } from './container/edit-task/edit-task.component'

@NgModule({
  declarations: [DashBoardComponent, NewListComponent, SidebarComponent, ListButtonComponent, NewTaskComponent, DashBoardContentComponent, TaskComponent, EditTaskComponent],
  imports: [CommonModule, SharedModule,FormsModule, 
    StoreModule.forFeature('list', listReducer),
    StoreModule.forFeature('task', taskReducer),
    StoreModule.forFeature('activeList', activeListReducer),
  FormsModule,],
  exports: [DashBoardComponent, SidebarComponent]
})
export class TaskManagerModule {}
