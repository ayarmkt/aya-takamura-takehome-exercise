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
      <div className={classes['company-info']}>
        <img src={selectedTask.company.pictureURL} alt='company' />
        <div className={classes['company-info-text']}>
          <p className={classes['company-name']}>{selectedTask.company.name}</p>
          <p className={classes.address}>
            Address:
            {selectedTask.details.address}
          </p>
        </div>
      </div>

      <div className={classes.additionalInfo}>
        <div className={classes.details}>
          <p>
            <span>Job Type:</span> {selectedTask.details.jobType}
          </p>
          <p>
            <span>Objective:</span> {selectedTask.details.objective}
          </p>
          <p>
            <span>Private Note:</span> {selectedTask.details.privateNote}
          </p>
          <p>
            <span>Additional Informations:</span>
            {selectedTask.details.additionalInformations}
          </p>
          <p>
            <span>Applicants:</span> {selectedTask.details.applicants}
          </p>
          <p>
            <span>Job Type:</span> {selectedTask.details.jobType}
          </p>

          <p>
            <span>Team:</span> {selectedTask.details.team}
          </p>
          <p>
            <span>Required Documents:</span>
            {selectedTask.details.requiredDocuments}
          </p>
        </div>
        <div className={classes.selection}>
          <p>
            <span>Status:</span> {selectedTask.selection.status}
          </p>
          <p>
            <span>Target:</span> {selectedTask.selection.target}
          </p>
          <p>
            <span>Comment:</span> {selectedTask.selection.comment}
          </p>
          <p>
            <span>isVisibleForSiders:</span>{' '}
            {selectedTask.selection.isVisibleForSiders}
          </p>
          <p>
            <span>Private Until:</span>{' '}
            {formatDate(selectedTask.selection.privateUntil)}
          </p>
          <p>
            <span>is PreSelection:</span>{' '}
            {selectedTask.selection.isPreselection}
          </p>
        </div>
      </div>

      <div className={classes.shifts}>{shiftsList}</div>

      <div className={classes.action}>
        <button className={classes.validate}>SELECTION OVER</button>
        <button className={classes.close} onClick={closeModalHandler}>
          CLOSE
        </button>
      </div>

      <p className={classes.update}>
        Updated At: {formatDate(selectedTask.updatedAt)}
      </p>
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
