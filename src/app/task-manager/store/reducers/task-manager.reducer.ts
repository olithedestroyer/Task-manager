import { taskmanagerAction, taskmanagerActionTypes } from "../actions/task-manager.actions";
import { newlist } from "../models/list.model";
import { newtask } from "../models/task.model";

const initialState: Array<newlist> = [
];

export function taskmanagerReducer(
    state: Array<newlist> = initialState,
    action: taskmanagerAction,
) {
    switch (action.type) {
        case taskmanagerActionTypes.ADD_LIST: {
            return [...state, action.payload];
        }
        case taskmanagerActionTypes.ADD_TASK: {
            return [...state, action.payload];
        }
        default:
            return state;

    }
}
