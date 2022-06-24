import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { taskmanagerReducer } from './task-manager/store/reducers/task-manager.reducer';
import { TaskManagerModule } from './task-manager/task-manager.module';
import { AppState } from './task-manager/store/models/app-state.model';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { taskReducer } from './task-manager/store/reducers/task.reducer';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TaskManagerModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      list:taskmanagerReducer,
      task: taskReducer
    } as ActionReducerMap<any,any>),
    FormsModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
