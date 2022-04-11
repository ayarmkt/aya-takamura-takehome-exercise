import React from 'react';
import ReactDOM from 'react-dom';
import classes from './TaskItemDetailModal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  return (
    <section className={classes.modal}>
      <p>THIS IS A MODAL</p>
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
