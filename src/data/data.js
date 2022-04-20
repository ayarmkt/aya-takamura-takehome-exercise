const jsonData = require('./tasks.json');

export const closedTasks = jsonData.filter(
  (task) => task.selection.status === 'closed'
);

export const readyTasks = jsonData.filter(
  (task) => task.selection.status === 'ready'
);

export const assignmentNeededTasks = jsonData.filter((task) => !task.assignee);
