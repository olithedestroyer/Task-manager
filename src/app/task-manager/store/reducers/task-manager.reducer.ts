import {
  taskmanagerAction,
  taskmanagerActionTypes,
} from '../actions/task-manager.actions';
import { AppState } from '../models/app-state.model';
import { Task } from '../models/task.model';

const initialState: AppState = {
  lists: {},
  tasks: {},
  activeList: '',
};

export function taskReducer(
  state: AppState = initialState,
  action: taskmanagerAction
) {
  switch (action.type) {
    case taskmanagerActionTypes.ADD_TASK: {
      const { Task } = action;
      return {
        ...state,
        tasks: { ...state.tasks, [Task.id]: Task },
      };
    }

    case taskmanagerActionTypes.DELETE_TASK: {
      const { id } = action;
      const{ tasks } = state;
      
      return {
        ...state,
        tasks: Object.values(tasks)
          .filter((task: Task) => task.id !== id)
          .reduce((prev, current) => {
            return {
              ...prev,
              [current.id]: current,
            };
          }, {}),
      };
    }
    case taskmanagerActionTypes.ADD_LIST: {
      const { List } = action; 
        return{  ...state,
          lists: { ...state.lists, [List.id]: List },
        
        };
    }
    
    case taskmanagerActionTypes.RENAME_TASK: {
      const { id, name } = action;
      const { tasks } = state;
      const currentTask = tasks[id];

      return {
        ...state,
        tasks: { ...tasks, [id]: { ...currentTask, name } },
      };
    }
    case taskmanagerActionTypes.ACTIVE_LIST: {
      const {activeList} = state;
      return { ...state, activeList: action.payload };
    }
    default:
      return state;
  }
}

