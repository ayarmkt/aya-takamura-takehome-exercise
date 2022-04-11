import classes from './TaskItem.module.css';
import DataFormatted from '../assets/DataFormatted';
import { MdModeEditOutline } from 'react-icons/md';

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
        <div className={classes.infoDetails}>{companyName}</div>
        <div className={classes.infoDetails}>{target}</div>
        <div className={`${classes.infoDetails} ${statusClass}`}>{status}</div>
        <div className={classes.infoDetails}>{deadline}</div>
        <MdModeEditOutline />
      </section>
    );
  });
};

export default TaskItem;
