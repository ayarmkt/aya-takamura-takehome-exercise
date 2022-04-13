# Selection App

## Tech Stack
Tech Stack: React | Redux | CSS<br>
Platform: GitHub Pages<br>

## Final Product

**Live Site:** https://ayarmkt.github.io/aya-takamura-takehome-exercise/

### Details
- Upon loading, all tasks are shown in the list
- Redux is used to manage task data and UI state (modal, tabs)
- Tasks are sorted by clicking on the tabs "All Tasks", "Closed Tasks", or "Close to Deadline"
- Tasks can be filtered by various items (currently by TARGET only) 
- Tasks details are displayed in a modal view by clicking on each task item on the list

## Future Updates
- Improve the order of tasks in the "All Tasks" view for more efficient selection. The default order can be sorted by impact.
- Add various filters such as status, number of workers, etc. Extract the filter button component as a reusable component and update the filterData reducer in the Redux store
- The modal for task details display can be further improved. The data organization and the usage of a modal view need reconsideration
- Add functionality to the "SELECTION OVER" button inside the modal to remove selected tasks from the list. Add a new reducer to the Redux store to handle the changes in the displayed tasks

## Getting Started
1. Fork and then clone this repository
2. Install npm with `npm install`
3. Run `npm start` to start the server in development
