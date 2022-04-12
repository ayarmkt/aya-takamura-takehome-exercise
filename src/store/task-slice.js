import { createSlice } from '@reduxjs/toolkit';

//const jsonData = require('../assets/tasks.json');

const initialTaskState = {
  tasks: null,
  selectedTask: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState: initialTaskState,
  reducers: {
    storeSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const { storeSelectedTask } = taskSlice.actions;
