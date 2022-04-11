import React, { useState } from 'react';
import classes from './MainPage.module.css';
import TaskItem from './TaskItem';

const MainPage = () => {
  const [chosenTab, setChosenTab] = useState('All Tasks');

  const label = (
    <div className={classes.labels}>
      <div className={classes.label}>Action</div>
      <div className={classes.label}>Company Name</div>
      <div className={classes.label}>Target</div>
      <div className={classes.label}>Status</div>
      <div className={classes.label}>Deadline</div>
    </div>
  );

  return (
    <React.Fragment>
      <h1>Selection</h1>
      <section className={classes.container}>
        <div className={classes.tab}>
          <button
            className={`${classes.tabLinks} ${
              chosenTab === 'All Tasks' ? classes.active : ''
            }`}
            onClick={() => {
              setChosenTab('All Tasks');
            }}
          >
            All Tasks
          </button>

          <button
            className={`${classes.tabLinks} ${
              chosenTab === 'Closed' ? classes.active : ''
            }`}
            onClick={() => {
              setChosenTab('Closed');
            }}
          >
            Closed Tasks
          </button>
          <button
            className={`${classes.tabLinks} ${
              chosenTab === 'Close to Deadline' ? classes.active : ''
            }`}
            onClick={() => {
              setChosenTab('Close to Deadline');
            }}
          >
            Close to Deadline
          </button>
        </div>
        <section className={classes.content}>
          <div>{label}</div>
          <TaskItem chosenTab={chosenTab} />
        </section>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
