import classes from './TabButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedTab } from '../store/ui-slice';
import { setDisplayedTasks } from '../store/task-slice';
import sortData from '../utils/sort-data';

const TabButton = ({ label }) => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.ui);
  //const { displayedTasks } = useSelector((state) => state.task);

  const tabClickHandler = (e) => {
    e.preventDefault();
    dispatch(changeSelectedTab(e.target.textContent));
    dispatch(setDisplayedTasks(sortData(e.target.textContent)));
  };

  return (
    <button
      className={`${classes.tabLinks} ${
        selectedTab === label ? classes.active : ''
      }`}
      onClick={tabClickHandler}
    >
      {label}
    </button>
  );
};

export default TabButton;
