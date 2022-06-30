import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state.model';

const getTaskManagerState = createFeatureSelector<AppState>('taskmanager');

const getListsInternal = createFeatureSelector<AppState>('list');

const getTasksInternal = createFeatureSelector<AppState>('task');

export const getLists = createSelector(getListsInternal, (lists) => {
  return Object.values(lists);
});
export const getActiveList = createFeatureSelector<AppState, string>('activeList');


export const getTasks = createSelector(
  getTasksInternal,
  getActiveList,
  (tasks, activeList) => {
    return Object.values(tasks).filter((task) => task.listId === activeList);
  }
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
