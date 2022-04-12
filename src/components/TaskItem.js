import classes from './TaskItem.module.css';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../store/ui-slice';
import { storeSelectedTask } from '../store/task-slice';
import formatDate from '../utils/format-date';

const TaskItem = () => {
  const dispatch = useDispatch();
  const { displayedTasks } = useSelector((state) => state.task);
  //const [slotsNum, setSlotsNum] = useState(0);
  //const [filledSlotsNum, setFilledSlotsNum] = useState(0);

  return displayedTasks.map((task) => {
    const companyName = task.company.name;
    const { target } = task.selection;
    const { status } = task.selection;
    const deadline = task.selection.privateUntil;
    const { applicants } = task.details;

    const statusClass =
      status === 'closed' ? classes['status-closed'] : classes['status-open'];

    let slotsNum;
    let filledSlotsNum;
    if (task.shifts) {
      slotsNum = task.shifts.reduce((prev, cur) => {
        return prev + cur['slots'];
      }, 0);

      filledSlotsNum = task.shifts.reduce((prev, cur) => {
        return prev + cur['filledSlots'];
      }, 0);
    }

    const openModalHandler = () => {
      dispatch(storeSelectedTask({ ...task }));
      dispatch(openModal());
    };

    formatDate(deadline);

    return (
      <section
        className={classes.info}
        key={task.id}
        onClick={openModalHandler}
      >
        <div className={classes.infoDetails}>{companyName}</div>
        <div className={classes.infoDetails}>{target}</div>
        <div className={`${classes.infoDetails} ${statusClass}`}>{status}</div>
        <div className={classes.infoDetails}>{applicants}</div>
        <div className={classes.infoDetails}>{slotsNum}</div>
        <div className={classes.infoDetails}>{filledSlotsNum}</div>
        <div className={classes.infoDetails}>{formatDate(deadline)}</div>
        <MdModeEditOutline className={classes.icon} size='25px' />
      </section>
    );
  });
};

export default TaskItem;
