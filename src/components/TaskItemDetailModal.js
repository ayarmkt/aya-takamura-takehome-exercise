import React from 'react';
import ReactDOM from 'react-dom';
import classes from './TaskItemDetailModal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  return (
    <section className={classes.modal}>
      <p>Updated At: 2022-03-31T14:46:27.534Z</p>

      <div className={classes['company-info']}>
        <img
          src='https://weslash-eu.s3-eu-central-1.amazonaws.com/organisations-logos%2FffQi78P8e5rLLobwa.logo.png'
          alt='company'
        />
        <p>FRICHTI MAROC</p>
      </div>

      <div className={classes.details}>
        <p>Job Type: Préparation de commandes</p>
        <p>
          Objective: Preparation de commandes \nReceptionner, ranger et trier
          les marchandises selon les indications.\nEmballer et garnir les sacs
          selon la fragilité des produits\nContrôler la conformité des
          produits.\nAssurer l'entretien du local, nettoyer les zones de
          stockages et les tables de préparations
        </p>
        <p>Private Note:</p>
        <p>
          Additional Informations: Port du masque obligatoire \nPièce d'identité
        </p>
        <p>Applicants: 1</p>
        <p>Address: 75019 2 Pl. du Maroc, 75019 Paris, France</p>
        <p>Team: Squad 6</p>
        <p>Required Documents:</p>
      </div>

      <div className={classes.selection}>
        <p>Status: Closed</p>
        <p>Target: requested-siders</p>
        <p>Comment: </p>
        <p>isVisibleForSiders: no</p>
        <p>Private Until: 2022-04-01T22:14:39.159Z</p>
        <p>is PreSelection: no</p>
      </div>

      <div className={classes.shifts}>
        <div className={classes.shift}>
          <p>Start: 2022-04-04T16:00:00Z</p>
          <p>End: 2022-04-04T19:00:00Z</p>
          <p>Slots: 1</p>
          <p>filled slots: 1</p>
        </div>
        <div className={classes.shift}>
          <p>Start: 2022-04-04T16:00:00Z</p>
          <p>End: 2022-04-04T19:00:00Z</p>
          <p>Slots: 1</p>
          <p>filled slots: 1</p>
        </div>
      </div>

      <button>SELECTION OVER</button>
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
