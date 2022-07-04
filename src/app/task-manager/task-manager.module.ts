import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './container/dash-board/dash-board.component'; 
import { NewListComponent } from './container/new-list/new-list.component'; 
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { NewTaskComponent } from './container/new-task/new-task.component';
import { DashBoardContentComponent } from './container/dash-board-content/dash-board-content.component';
import {  taskReducer,} from './store/reducers/task-manager.reducer';
import { TaskComponent } from './components/task/task.component';
import { EditTaskComponent } from './container/edit-task/edit-task.component'

@NgModule({
  declarations: [DashBoardComponent, NewListComponent, SidebarComponent, ListButtonComponent, NewTaskComponent, DashBoardContentComponent, TaskComponent, EditTaskComponent],
  imports: [CommonModule, SharedModule,FormsModule, 
    StoreModule.forFeature('task-manager', taskReducer),
  FormsModule,],
  exports: [DashBoardComponent, SidebarComponent]
})
export class TaskManagerModule {}
