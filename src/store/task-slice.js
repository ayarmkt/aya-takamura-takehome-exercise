import { createSlice } from '@reduxjs/toolkit';

const jsonData = require('../assets/tasks.json');

const initialTaskState = {
  displayedTasks: jsonData,
  selectedTask: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState: initialTaskState,
  reducers: {
    storeSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    setDisplayedTasks(state, action) {
      state.displayedTasks = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const { storeSelectedTask, setDisplayedTasks } = taskSlice.actions;
