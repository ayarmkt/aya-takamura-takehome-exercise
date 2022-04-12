import classes from './TabButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedTab } from '../store/ui-slice';

const TabButton = ({ label }) => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.ui);

  const tabClickHandler = (e) => {
    e.preventDefault();
    dispatch(changeSelectedTab(e.target.textContent));
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
