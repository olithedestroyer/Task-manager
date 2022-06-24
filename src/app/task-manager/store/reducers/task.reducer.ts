import { taskmanagerAction, taskmanagerActionTypes } from "../actions/task-manager.actions";
import { newlist } from "../models/list.model";
import { newtask } from "../models/task.model";

const initialState: Array<newtask> = [
];

export function taskReducer(
    state: Array<newtask> = initialState,
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
