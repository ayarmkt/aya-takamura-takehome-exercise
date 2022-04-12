import classes from './Filter.module.css';
//import jsonData from '../';
import { useDispatch, useSelector } from 'react-redux';
import sortData from '../utils/sort-data';
import React, { useEffect, useState } from 'react';
import { setDisplayedTasks } from '../store/task-slice';

const jsonData = require('../assets/tasks.json');

const getTypeOfTasks = (selectedTab) => {
  return [
    ...new Set(sortData(selectedTab).map((task) => task.selection.target)),
  ];
};

const Filter = () => {
  //const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.ui);
  const { displayedTasks } = useSelector((state) => state.task);

  const [filterIsOpen, setFilterIsOpen] = useState(false);
  //const [isChecked, setIsChecked] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const openFilterHandler = () => {
    setFilterIsOpen((prev) => !prev);
    console.log(filterIsOpen);
  };

  const checkboxHandler = (e) => {
    console.log('checkboxHandler');
    console.log('e.target.checked', e.target.checked);

    if (e.target.checked) {
      setSelectedFilter([...selectedFilter, e.target.value]);
    } else {
      setSelectedFilter(
        selectedFilter.filter((filter) => filter !== e.target.value)
      );
    }
  };

  //★★★
  // useEffect(() => {
  //   const filterTasksHandler = () => {
  //     const newDisplayedTasks = displayedTasks.filter((item) => {
  //       for (const filter of selectedFilter) {
  //         console.log('each filter', filter);
  //         console.log('each item', item);
  //         if (filter === undefined || item.selection.target !== filter)
  //           return false;
  //         //return true;
  //       }
  //       return true;
  //     });
  //     console.log('selectedFilter', selectedFilter);
  //     console.log('##newDisplayedTasks', newDisplayedTasks);
  //     setDisplayedTasks(newDisplayedTasks);
  //   };

  //   console.log('selectedFilter changed', selectedFilter);
  //   filterTasksHandler();
  // }, [selectedFilter, displayedTasks]);

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

  const uniqueTarget = getTypeOfTasks().map((target) => (
    <React.Fragment>
      <input
        type='checkbox'
        value={target}
        onChange={checkboxHandler}
        //checked={selectedFilter.includes(target) ? true : false}
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
