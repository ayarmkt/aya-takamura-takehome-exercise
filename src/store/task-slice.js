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
    sortData(state, action) {
      switch (action.payload) {
        case 'All Tasks':
          state.displayedTasks = jsonData;
          break;

        case 'Closed Tasks':
          state.displayedTasks = jsonData.filter(
            (info) => info.selection.status === 'closed'
          );
          break;

        case 'Close to Deadline':
          state.displayedTasks = [...jsonData].sort((a, b) => {
            if (a.selection.privateUntil === null) return 1;
            if (b.selection.privateUntil === null) return -1;
            if (a.selection.privateUntil === b.selection.privateUntil) {
              return 0;
            }

            return new Date(a.selection.privateUntil) <
              new Date(b.selection.privateUntil)
              ? -1
              : 1;
          });
          break;

        default:
          state.displayedTasks = jsonData;
          break;
      }
    },
  },
});

export default taskSlice.reducer;
export const { storeSelectedTask, setDisplayedTasks, sortData } =
  taskSlice.actions;
