import classes from './Filter.module.css';
import jsonData from '../assets/tasks.json';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { filterData } from '../store/task-slice';
import { setSelectedFilter } from '../store/task-slice';
import { AiOutlineDown } from 'react-icons/ai';

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
    <div className={classes['dropdown-item']}>
      <input type='checkbox' value={target} onChange={checkboxHandler} />
      <label>{target}</label>
    </div>
  ));

  return (
    <div className={classes['filter-section']}>
      <div className={classes.title}>FILTER BY:</div>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn} onClick={openFilterHandler}>
          TARGET <AiOutlineDown className={classes.icon} />
        </button>
        <div
          className={`${classes['dropdown-content']} ${
            filterIsOpen ? classes.open : ''
          }`}
        >
          {uniqueTarget}
        </div>
      </div>
    </div>
  );
};

export default Filter;
