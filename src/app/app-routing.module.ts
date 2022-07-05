import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './task-manager/container/sidebar/sidebar.component';
import { NewListComponent } from './task-manager/container/new-list/new-list.component';
import { DashBoardComponent } from './task-manager/container/dash-board/dash-board.component';
import { DashBoardContentComponent } from './task-manager/container/dash-board-content/dash-board-content.component';
import { NewTaskComponent } from './task-manager/container/new-task/new-task.component';
import { EditTaskComponent } from './task-manager/container/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dash-board'},
  { path: 'dash-board', component: DashBoardComponent},
  {path: 'dash-board/:value', component: DashBoardComponent},
  { path: 'list/new',component: NewListComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'dash-board-content', component: DashBoardContentComponent},
  { path: 'task/new', component: NewTaskComponent},
  { path: 'task/:id', component: EditTaskComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
