import React, { useState } from "react";
import AbstractModal from "../AbstractModal/AbstractModal";
import styles from "./MoveModal.module.css";

const MoveModal = ({ header, subheader, description, dismissible }) => {
  const [displayModal, setDisplayModal] = useState(true);

  const handlePlus = (e) => {
    window.deep.event({ "event.type": "move-modal-click" });
    window.dataLayer.push({ event: "move-modal-click" });
    window.open(
      "https://www.rappler.com/about-plus-membership-program?utm_source=rappler_plus&utm_medium=modal&utm_campaign=plus_modal"
    );

    setDisplayModal(!displayModal);
    document.body.style.overflowY = "";
  };

  const handleDismiss = (e) => {
    if (dismissible) {
      window.deep.event({ "event.type": "regwall-close" });
      window.dataLayer.push({ event: "move-modal-close" });
      setDisplayModal(!displayModal);
      document.body.style.overflowY = "";
    }
  };

  return (
    <AbstractModal
      showModal={displayModal}
      logo="https://assets2.rappler.com/2021/06/MovePH-logo.png"
      headerText={header}
      subHeader={subheader}
      bodyText={description}
      modalStyles={styles}
      hasClose={true}
      onDismiss={handleDismiss}
    >
      <button className={`ag-plus-move ${styles.button}`} onClick={handlePlus}>
        be a mover
      </button>
      <button
        className={`ag-dismiss ${styles.btnLearnMore}`}
        onClick={handleDismiss}
      >
        Maybe Next Time
      </button>
    </AbstractModal>
  );
};

export default MoveModal;
