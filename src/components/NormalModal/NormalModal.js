import React, { useState } from "react";
import AbstractModal from "../AbstractModal/AbstractModal";
import styles from "./NormalModal.module.scss";

const NormalModal = ({ header, subheader, description, dismissible }) => {
  const [displayModal, setDisplayModal] = useState(true);

  const handleLogin = (e) => {
    // window.deep.event({ "event.type": "regwall-click" });
    // window.dataLayer.push({ event: "register-modal-click" });
    setDisplayModal(!displayModal);
    // if (dismissible) {
    //   dataLayer.push({ event: "regwall-experiment-soft-click-join" });
    // } else {
    //   dataLayer.push({ event: "regwall-experiment-hard-click-join" });
    // }

    document
      .getElementsByClassName(
        "StyledComponents__PrimaryItem-sc-8b50a6-11 StyledComponents__TabletMobilePrimaryItem-sc-11uybho-8 fYDBuC"
      )[0]
      .click();
  };

  const handleSignup = (e) => {
    // window.dataLayer.push({ event: "register-modal-click" });
    document
      .getElementsByClassName(
        "Button-thxeg-0 StyledComponents__JoinButton-sc-11uybho-5 hZSvol"
      )[0]
      .click();
  };

  const handleDismiss = (e) => {
    if (dismissible) {
      // window.deep.event({ "event.type": "regwall-close" });
      // window.dataLayer.push({ event: "register-modal-close" });

      setDisplayModal(!displayModal);
      document.body.style.overflowY = "";
    }
  };

  return (
    <AbstractModal
      showModal={displayModal}
      logo="https://assets2.rappler.com/2021/01/svgexport-12.png"
      modalStyles={styles}
      headerText={header}
      subHeader={subheader}
      bodyText={description}
      hasClose={false}
      showDismiss={dismissible}
      onDismiss={handleDismiss}
      onLogin={handleLogin}
    >
      <button className={`ag-signup ${styles.button}`} onClick={handleSignup}>
        Join Now
      </button>
      {dismissible && (
        <button
          className={`ag-dismiss ${styles.btnLearnMore}`}
          onClick={handleDismiss}
        >
          Maybe Next Time
        </button>
      )}
    </AbstractModal>
  );
};

export default NormalModal;
