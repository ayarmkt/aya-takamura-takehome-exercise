import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import taskReducer from './task-slice';

const store = configureStore({ reducer: { ui: uiReducer, task: taskReducer } });

export default store;
