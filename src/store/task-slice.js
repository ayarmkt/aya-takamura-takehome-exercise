import { createSlice } from '@reduxjs/toolkit';

const jsonData = require('../assets/tasks.json');

const initialTaskState = {
  displayedTasks: jsonData,
  tasksWithoutFilter: jsonData,
  selectedTask: null,
  selectedFilter: [],
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
    setSelectedFilter(state, action) {
      const { checked, value } = action.payload;
      if (checked) {
        state.selectedFilter = [...state.selectedFilter, value];
      } else {
        state.selectedFilter = state.selectedFilter.filter(
          (filter) => filter !== value
        );
      }
    },
    sortData(state, action) {
      switch (action.payload) {
        case 'All Tasks':
          state.displayedTasks = jsonData;
          state.tasksWithoutFilter = state.displayedTasks;
          break;

        case 'Closed Tasks':
          state.displayedTasks = jsonData.filter(
            (info) => info.selection.status === 'closed'
          );
          state.tasksWithoutFilter = state.displayedTasks;
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
          state.tasksWithoutFilter = state.displayedTasks;
          break;

        default:
          state.displayedTasks = jsonData;
          state.tasksWithoutFilter = state.displayedTasks;
          break;
      }
    },
    filterData(state, action) {
      state.displayedTasks = state.tasksWithoutFilter.filter((task) => {
        if (action.payload.length === 0) return true;
        for (const filter of action.payload) {
          if (task.selection.target === filter) return true;
        }
        return false;
      });
    },
  },
});

export default taskSlice.reducer;
export const {
  storeSelectedTask,
  setDisplayedTasks,
  sortData,
  filterData,
  setSelectedFilter,
} = taskSlice.actions;
