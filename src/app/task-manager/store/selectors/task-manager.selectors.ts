import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state.model';

const getTaskManagerState = createFeatureSelector<AppState>('taskmanager');

const getListsInternal = createSelector(getTaskManagerState, (state) => {
  return state.lists;
});

const getTasksInternal = createSelector(getTaskManagerState, (state) => {
  return state.tasks;
});

export const getLists = createSelector(getListsInternal, (lists) => {
  return Object.values(lists);
});

export const getActiveList = createSelector(getTaskManagerState, (state) => {
  return state.activeList;
});

export const getTasks = createSelector(
  getTasksInternal,
  getActiveList,
  (tasks, activeList) => {
    return Object.values(tasks).filter((task) => task.listId === activeList);
  }
);

export const getTaskById = createSelector(
  getTasksInternal,
  (tasks: { [x: string]: any; }, props: { id: string | number; }) => tasks[props.id]
);

export const showNoListsEmptyState = createSelector(getLists, (lists) => {
  return lists.length == 0;
});

export const showNoTasksEmptyState = createSelector(
  getLists,
  getTasks,
  (lists, tasks) => {
    return lists.length > 0 && tasks.length == 0;
  }
);
