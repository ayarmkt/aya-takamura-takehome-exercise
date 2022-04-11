import classes from './TaskItem.module.css';
import DataFormatted from '../assets/DataFormatted';

const TaskItem = ({ chosenTab }) => {
  return DataFormatted(chosenTab).map((info) => {
    const companyName = info.company.name;
    const { target } = info.selection;
    const { status } = info.selection;
    const deadline = info.selection.privateUntil;

    const statusClass =
      status === 'closed' ? classes['status-closed'] : classes['status-open'];

    return (
      <section className={classes.info} key={info.id}>
        <button className={classes.infoDetails}>Handle this task</button>
        <div className={classes.infoDetails}>{companyName}</div>
        <div className={classes.infoDetails}>{target}</div>
        <div className={`${classes.infoDetails} ${statusClass}`}>{status}</div>
        <div className={classes.infoDetails}>{deadline}</div>
      </section>
    );
  });
};

export default TaskItem;
