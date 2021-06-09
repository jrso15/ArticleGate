import React from "react";
import styles from "./AbstractModal.module.css";

const AbstractModal = ({
  showModal,
  logo,
  modalStyles,
  headerText,
  subHeader,
  bodyText,
  hasClose,
  onLogin,
  onDismiss,
  children,
}) => {
  const modalWrapper = `${styles.modal} ${modalStyles.modal} ${
    showModal ? styles.show : ""
  }`;

  return (
    <div className={styles.modalContainer}>
      <div className={modalWrapper}>
        <div className={styles.topContainer}>
          <div className={modalStyles.iconContainer}>
            <a href="https://www.rappler.com">
              <img src={logo} className={styles.logoImage} />
            </a>
          </div>

          {hasClose && (
            <button
              className={`ag-ng-dismiss ${styles.close}`}
              onClick={onDismiss}
            >
              X
            </button>
          )}
          {!hasClose && (
            <p className={styles.member}>
              Already a member?{" "}
              <a onClick={onLogin} className={`ag-login ${styles.login}`}>
                login
              </a>
            </p>
          )}
        </div>
        <div className={styles.headerContainer}>
          <h3 className={modalStyles.headerStyle}>{headerText}</h3>
          <h3 className={modalStyles.subHeaderStyle}>{subHeader}</h3>
        </div>
        <p className={styles.bodyText}>{bodyText}</p>
        <div className={styles.btnWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default AbstractModal;
