import { newlist } from "./list.model";
import { newtask } from "./task.model";

export interface AppState {
    activeList: string;
    tasks: Array<newtask>;
    list: Array<newlist>
}
