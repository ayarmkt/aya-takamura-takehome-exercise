//import useCalcSlots from '../utils/calcSlots';
import classes from './TaskItemContainer.module.css';

const sumSlots = (task, slotType) => {
  if (task.shifts) {
    return task.shifts
      .map((shift) => shift[slotType])
      .reduce((acc, cur) => acc + cur, 0);
  }
};

const TaskItemContainer = ({ task }) => {
  let slots = sumSlots(task, 'slots');
  let filledSlots = sumSlots(task, 'filledSlots');

  console.log(task);

  return (
    <div className={classes.container}>
      <div>3 days</div>
      <div className={classes.companyInfo}>
        <img
          className={classes.image}
          src={task.company.pictureURL}
          alt={task.company.name}
        />
        <div className={classes.jobType}>{task.details.jobType}</div>
        <div>{task.company.name}</div>
      </div>

      <div>
        <div>
          {filledSlots}/{slots} slots
        </div>
        <div>({task.details.applicants} applicants)</div>
      </div>

      <div>
        {task.assignee
          ? `${task.assignee.firstName} ${task.assignee.lastName}`
          : ''}
      </div>
      <div>Selection</div>
      <div className={classes.action}>
        <div>Edit</div>
        <div>Close</div>
        <div>Other</div>
      </div>
    </div>
  );
};

export default TaskItemContainer;
