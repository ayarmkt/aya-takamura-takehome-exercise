import classes from './TaskItem.module.css';
//import sortData from '../utils/sort-data';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
//import uiSlice from '../store/ui-slice';
import { openModal } from '../store/ui-slice';
import { storeSelectedTask } from '../store/task-slice';

const TaskItem = () => {
  const dispatch = useDispatch();
  //const { selectedTab } = useSelector((state) => state.ui);
  const { displayedTasks } = useSelector((state) => state.task);
  console.log(displayedTasks);

  //the data used here will change depending on the filter
  //sortData(selectedTab).map
  return displayedTasks.map((task) => {
    const companyName = task.company.name;
    const { target } = task.selection;
    const { status } = task.selection;
    const deadline = task.selection.privateUntil;

    const statusClass =
      status === 'closed' ? classes['status-closed'] : classes['status-open'];

    const openModalHandler = () => {
      dispatch(storeSelectedTask({ ...task }));
      dispatch(openModal());
    };

    return (
      <section
        className={classes.info}
        key={task.id}
        onClick={openModalHandler}
      >
        <div className={classes.infoDetails}>{companyName}</div>
        <div className={classes.infoDetails}>{target}</div>
        <div className={`${classes.infoDetails} ${statusClass}`}>{status}</div>
        <div className={classes.infoDetails}>{deadline}</div>
        <MdModeEditOutline className={classes.icon} size='25px' />
      </section>
    );
  });
};

export default TaskItem;
