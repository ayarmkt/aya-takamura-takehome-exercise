import classes from './Filter.module.css';
//import jsonData from '../';
import { useDispatch, useSelector } from 'react-redux';
import sortData from '../utils/sort-data';
import React, { useState } from 'react';
import { setDisplayedTasks } from '../store/task-slice';

const jsonData = require('../assets/tasks.json');

const Filter = () => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.ui);
  const { displayedTasks } = useSelector((state) => state.task);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const getTypeOfTasks = () => {
    return [
      ...new Set(
        sortData(jsonData, selectedTab).map((task) => task.selection.target)
      ),
    ];
  };

  const filterTasksHandler = (e) => {
    e.preventDefault();
    //change from jsonData
    const newData = sortData(displayedTasks, selectedTab).filter(
      (task) => task.selection.target === e.target.value
    );
    dispatch(setDisplayedTasks(newData));
  };

  const uniqueTarget = getTypeOfTasks().map((target) => (
    <React.Fragment>
      <input type='checkbox' value={target} onClick={filterTasksHandler} />
      <label>{target}</label>
    </React.Fragment>
  ));

  const openFilterHandler = () => {
    setFilterIsOpen((prev) => !prev);
    console.log(filterIsOpen);
  };

  return (
    <div className={classes.dropdown}>
      <div>FILTER BY:</div>
      <button onClick={openFilterHandler}>TARGET</button>
      <div
        className={`${classes['dropdown-content']} ${
          filterIsOpen ? classes.open : ''
        }`}
      >
        {uniqueTarget}
      </div>
    </div>
  );
};

export default Filter;
