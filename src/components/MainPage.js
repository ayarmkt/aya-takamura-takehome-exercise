import React from 'react';
import classes from './MainPage.module.css';
import TaskItem from './TaskItem';
import TabButton from '../UI/TabButton';
import Filter from '../UI/Filter';

const MainPage = () => {
  const label = (
    <div className={classes.labels}>
      <div className={classes.label}>Company Name</div>
      <div className={classes.label}>Target</div>
      <div className={classes.label}>Status</div>
      <div className={classes.label}>Applicants</div>
      <div className={classes.label}>Shift Slots</div>
      <div className={classes.label}>Filled Slots</div>
      <div className={classes.label}>Deadline</div>
      <div className={classes.label}>Action</div>
    </div>
  );

  return (
    <div className={classes.container}>
      <h1>Start the Selection</h1>

      <div className={classes.tab}>
        <TabButton label='All Tasks' />
        <TabButton label='Closed Tasks' />
        <TabButton label='Close to Deadline' />
      </div>

      <Filter />

      <div className={classes.content}>
        <div>{label}</div>
        <div className={classes['content-items']}>
          <TaskItem />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
