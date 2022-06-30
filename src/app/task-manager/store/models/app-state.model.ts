import { newlist } from './list.model';
import { Task } from './task.model';

export interface AppState {
  activeList: string;
  tasks: Array<Task>;
  list: Array<newlist>;
}
