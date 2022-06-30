import { taskmanagerAction, taskmanagerActionTypes } from "../actions/task-manager.actions";
import { Task } from "../models/task.model";

const initialState: Array<Task> = [
];

export function taskReducer(
    state: Array<Task> = initialState,
    action: taskmanagerAction,
) {
    switch (action.type) {
     
        case taskmanagerActionTypes.ADD_TASK: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}

export function activeListReducer(
    state: '',
    action: taskmanagerAction,

){
    switch (action.type) {
        case taskmanagerActionTypes.ACTIVE_LIST: {
            return [action.payload]
        }
        default:
            return state;
    }
}