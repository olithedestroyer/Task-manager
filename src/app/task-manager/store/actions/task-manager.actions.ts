import { Action } from '@ngrx/store';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';

export enum taskmanagerActionTypes {
  ADD_LIST = '[TASKMANAGER] Add list',
  ADD_TASK = '[TASKMANAGER] Add task',
  ACTIVE_LIST = '[TASKMANAGER] Add activelist',
  DELETE_TASK = '[TASKMANAGER] Delete task' 
}

export class AddlistAction implements Action {
  readonly type = taskmanagerActionTypes.ADD_LIST;
  constructor(public List: List) {}
}
export class AddtaskAction implements Action {
  readonly type = taskmanagerActionTypes.ADD_TASK;
  constructor(public Task: Task) {}
}
export class AddactivelistAction implements Action {
    readonly type = taskmanagerActionTypes.ACTIVE_LIST;
    constructor(public payload: string) {}
}
export class DeleteTaskAction implements Action {
  readonly type = taskmanagerActionTypes.DELETE_TASK;
  constructor(public id: string) {}

}

export type taskmanagerAction = AddlistAction | AddtaskAction | AddactivelistAction | DeleteTaskAction;
