import classes from './TaskItem.module.css';
import DataFormatted from '../assets/DataFormatted';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
//import uiSlice from '../store/ui-slice';
import { openModal } from '../store/ui-slice';

const TaskItem = ({ chosenTab }) => {
  const dispatch = useDispatch();

  return DataFormatted(chosenTab).map((info) => {
    const companyName = info.company.name;
    const { target } = info.selection;
    const { status } = info.selection;
    const deadline = info.selection.privateUntil;

    const statusClass =
      status === 'closed' ? classes['status-closed'] : classes['status-open'];

    const openModalHandler = () => {
      dispatch(openModal());
    };

    return (
      <section
        className={classes.info}
        key={info.id}
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
