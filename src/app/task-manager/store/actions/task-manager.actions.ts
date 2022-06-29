import { Action } from '@ngrx/store';
import { newlist } from '../models/list.model';
import { newtask } from '../models/task.model';

export enum taskmanagerActionTypes {
  ADD_LIST = '[TASKMANAGER] Add list',
  ADD_TASK = '[TASKMANAGER] add task',
  ACTIVE_LIST = '[TASKMANAGER] Add activelist'
}

export class AddlistAction implements Action {
  readonly type = taskmanagerActionTypes.ADD_LIST;

  constructor(public payload: newlist) {}
}
export class AddtaskAction implements Action {
  readonly type = taskmanagerActionTypes.ADD_TASK;

  constructor(public payload: newtask) {}
}
export class AddactivelistAction implements Action {
    readonly type = taskmanagerActionTypes.ACTIVE_LIST;

    constructor(public payload: string) {}
}

export type taskmanagerAction = AddlistAction | AddtaskAction | AddactivelistAction;
