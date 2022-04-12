import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './TaskItemDetailModal.module.css';
import { closeModal } from '../store/ui-slice';
import formatDate from '../utils/format-date';

const Backdrop = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return <div className={classes.backdrop} onClick={closeModalHandler}></div>;
};

const Modal = () => {
  const dispatch = useDispatch();
  const { selectedTask } = useSelector((state) => state.task);
  const [shift, setShift] = useState({ slots: 0, filledSlots: 0 });

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const shiftsList = selectedTask.shifts.map((shift) => {
    return (
      <div className={classes.shift} key={shift.id}>
        <p>Start: {formatDate(shift.start)}</p>
        <p>End: {formatDate(shift.end)}</p>
        <p>Slots: {shift.slots}</p>
        <p>filled slots: {shift.filledSlots}</p>
      </div>
    );
  });

  return (
    <section className={classes.modal}>
      <p>Updated At: {formatDate(selectedTask.updatedAt)}</p>

      <div className={classes['company-info']}>
        <img src={selectedTask.company.pictureURL} alt='company' />
        <p className={classes['company-name']}>{selectedTask.company.name}</p>
        <p>
          Address: {selectedTask.details.postalCode}{' '}
          {selectedTask.details.address}
        </p>
      </div>

      <div className={classes.details}>
        <p>Job Type: {selectedTask.details.jobType}</p>
        <p>Objective: {selectedTask.details.objective}</p>
        <p>Private Note: {selectedTask.details.privateNote}</p>
        <p>
          Additional Informations: {selectedTask.details.additionalInformations}
        </p>
        <p>Applicants: {selectedTask.details.applicants}</p>
        <p>Job Type: {selectedTask.details.jobType}</p>

        <p>Team: {selectedTask.details.team}</p>
        <p>Required Documents: {selectedTask.details.requiredDocuments}</p>
      </div>

      <div className={classes.selection}>
        <p>Status: {selectedTask.selection.status}</p>
        <p>Target: {selectedTask.selection.target}</p>
        <p>Comment: {selectedTask.selection.comment}</p>
        <p>isVisibleForSiders: {selectedTask.selection.isVisibleForSiders}</p>
        <p>Private Until: {selectedTask.selection.privateUntil}</p>
        <p>is PreSelection: {selectedTask.selection.isPreselection}</p>
      </div>

      <div className={classes.shifts}>{shiftsList}</div>

      <button>SELECTION OVER</button>
      <button onClick={closeModalHandler}>CLOSE</button>
    </section>
  );
};

const TaskItemDetailModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default TaskItemDetailModal;
