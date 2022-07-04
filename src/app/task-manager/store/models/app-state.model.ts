import { List } from './list.model';
import { Task } from './task.model';

export interface AppState {
  activeList: string;
  tasks:{[id: string]: Task};
  lists:{[id: string]: List};
}
