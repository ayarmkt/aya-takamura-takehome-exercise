import classes from './TabButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedTab } from '../store/ui-slice';
import { sortData } from '../store/task-slice';
import { filterData } from '../store/task-slice';

const TabButton = ({ label }) => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.ui);
  const { selectedFilter } = useSelector((state) => state.task);

  const tabClickHandler = (e) => {
    e.preventDefault();
    dispatch(changeSelectedTab(e.target.textContent));
    dispatch(sortData(e.target.textContent));
    dispatch(filterData(selectedFilter));
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
