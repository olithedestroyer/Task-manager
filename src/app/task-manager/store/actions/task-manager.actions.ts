import { Action } from "@ngrx/store";
import { newlist } from "../models/list.model";
import { newtask } from "../models/task.model";

export enum taskmanagerActionTypes {
    ADD_LIST = '[TASKMANAGER] Add list',
    DELETE_LIST = '[TASKMANAGER] Delete list',
    ADD_TASK = '[TASKMANAGER] add task',
}

export class AddlistAction implements Action {
    readonly type = taskmanagerActionTypes.ADD_LIST;

    constructor(public payload: newlist) {}
}
export class DeletelistAction implements Action {
    readonly type = taskmanagerActionTypes.DELETE_LIST

}
export class AddtaskAction implements Action {
    readonly type = taskmanagerActionTypes.ADD_TASK;

    constructor(public payload: newtask) {}
}

export type taskmanagerAction = 
AddlistAction 
| AddtaskAction;
