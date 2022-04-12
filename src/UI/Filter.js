import classes from './Filter.module.css';
import jsonData from '../assets/tasks.json';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { filterData } from '../store/task-slice';
import { setSelectedFilter } from '../store/task-slice';

const getTypeOfTasks = () => {
  return [...new Set(jsonData.map((task) => task.selection.target))];
};

const Filter = () => {
  const dispatch = useDispatch();
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const { selectedFilter } = useSelector((state) => state.task);

  const openFilterHandler = () => {
    setFilterIsOpen((prev) => !prev);
  };

  const checkboxHandler = (e) => {
    dispatch(
      setSelectedFilter({ checked: e.target.checked, value: e.target.value })
    );
  };

  useEffect(() => {
    dispatch(filterData(selectedFilter));
  }, [dispatch, selectedFilter]);

  const uniqueTarget = getTypeOfTasks().map((target) => (
    <React.Fragment>
      <input type='checkbox' value={target} onChange={checkboxHandler} />
      <label>{target}</label>
    </React.Fragment>
  ));

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
