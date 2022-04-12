import classes from './Filter.module.css';
import jsonData from '../assets/tasks.json';
import { useSelector, useDispatch } from 'react-redux';
//import sortData from '../utils/sort-data';
import { sortData } from '../store/task-slice';
import React, { useState } from 'react';
//import { setDisplayedTasks } from '../store/task-slice';

//const jsonData = require('../assets/tasks.json');

const Filter = () => {
  //const [selectedFilter, setSelectedFilter] = useState([]);

  // const checkboxChangeHandler = (e) => {
  //   e.preventDefault();
  //   e.target.checked = !e.target.checked;
  //   if (e.target.checked) {
  //     setSelectedFilter(e.target.value);
  //   } else {
  //     setSelectedFilter(
  //       selectedFilter.filter((filter) => filter !== e.target.value)
  //     );
  //   }
  //   console.log('selectedFilter', selectedFilter);
  // };

  // const filterTasksHandler = (e) => {
  //   e.preventDefault();

  //   //need to change filter methods
  //   const newData = sortData(displayedTasks, selectedTab).filter((task) => {
  //     for (const filter of selectedFilter) {
  //       if (task.selection.target === filter) {
  //         return true;
  //       }
  //       return false;
  //     }
  //   });
  //   dispatch(setDisplayedTasks(newData));
  // };

  const dispatch = useDispatch();
  const { displayedTasks } = useSelector((state) => state.task);
  const { selectedTab } = useSelector((state) => state.ui);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const getTypeOfTasks = () => {
    // return [
    //   ...new Set(sortData(selectedTab).map((task) => task.selection.target)),
    // ];
    //dispatch(sortData(selectedTab);
    //console.log(jsonData);
    return [...new Set(jsonData.map((task) => task.selection.target))];
  };

  const openFilterHandler = () => {
    setFilterIsOpen((prev) => !prev);
    console.log(filterIsOpen);
  };

  const uniqueTarget = getTypeOfTasks().map((target) => (
    <React.Fragment>
      <input
        type='checkbox'
        value={target}
        //onChange={(checkboxChangeHandler, filterTasksHandler)}
      />
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
