import React from 'react';
import classes from './MainPage.module.css';
import TaskItem from './TaskItem';
import { changeSelectedTab } from '../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.ui);

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
    dispatch(changeSelectedTab(e.target.textContent));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Start the Selection</h1>

        <div className={classes.tab}>
          <button
            className={`${classes.tabLinks} ${
              selectedTab === 'All Tasks' ? classes.active : ''
            }`}
            onClick={tabClickHandler}
          >
            All Tasks
          </button>

          <button
            className={`${classes.tabLinks} ${
              selectedTab === 'Closed Tasks' ? classes.active : ''
            }`}
            onClick={tabClickHandler}
          >
            Closed Tasks
          </button>

          <button
            className={`${classes.tabLinks} ${
              selectedTab === 'Close to Deadline' ? classes.active : ''
            }`}
            onClick={tabClickHandler}
          >
            Close to Deadline
          </button>
        </div>
      </div>

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
