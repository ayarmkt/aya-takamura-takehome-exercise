import React, { useState } from 'react';
import classes from './MainPage.module.css';
import TaskItem from './TaskItem';

const MainPage = () => {
  const [chosenTab, setChosenTab] = useState('All Tasks');

  const label = (
    <div className={classes.labels}>
      <div className={classes.label}>Company Name</div>
      <div className={classes.label}>Target</div>
      <div className={classes.label}>Status</div>
      <div className={classes.label}>Deadline</div>
      <div className={classes.label}>Action</div>
    </div>
  );

  const tabClickHandler = (e) => {
    e.preventDefault();
    setChosenTab(e.target.textContent);
  };

  return (
    <div className={classes.container}>
      <h1>Start the Selection</h1>

      <div className={classes.tab}>
        <button
          className={`${classes.tabLinks} ${
            chosenTab === 'All Tasks' ? classes.active : ''
          }`}
          onClick={tabClickHandler}
        >
          All Tasks
        </button>

        <button
          className={`${classes.tabLinks} ${
            chosenTab === 'Closed Tasks' ? classes.active : ''
          }`}
          onClick={tabClickHandler}
        >
          Closed Tasks
        </button>

        <button
          className={`${classes.tabLinks} ${
            chosenTab === 'Close to Deadline' ? classes.active : ''
          }`}
          onClick={tabClickHandler}
        >
          Close to Deadline
        </button>
      </div>

      <div className={classes.content}>
        <div>{label}</div>
        <div className={classes['content-items']}>
          <TaskItem chosenTab={chosenTab} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
