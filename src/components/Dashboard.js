import React from 'react';
import classes from './Dashboard.module.css';
import { assignmentNeededTasks, closedTasks, readyTasks } from '../data/data';
//import AssignmentNeeded from './AssignmentNeeded';
// import Closed from './Closed';
// import Ready from './Ready';
// import TasksNotFilled from './TasksNotFilled';
import TaskSubSection from './TaskSubSection';
//import useCalcShiftsSlots from '../hooks/useCalcShiftsSlots';

const Dashboard = () => {
  console.log(closedTasks);
  console.log(readyTasks);
  console.log(assignmentNeededTasks);

  //   const {} = useCalcShiftsSlots(task, slots);

  return (
    <div className={classes.container}>
      {/* <AssignmentNeeded />
      <TasksNotFilled />
      <Ready />
      <Closed /> */}
      <TaskSubSection data={assignmentNeededTasks} />
      <TaskSubSection data={readyTasks} />
      <TaskSubSection data={closedTasks} />
    </div>
  );
};

export default Dashboard;
