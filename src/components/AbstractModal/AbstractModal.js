import React from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./AbstractModal.module.scss";

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
  showDismiss,
  topHeaderText,
  hasSubscribed,
  privacyText,
  privacyPolicy,
}) => {
  const modalWrapper = `${styles.modalContainer} ${
    modalStyles.modalContainer
  } ${showModal ? styles.show : ""}`;
  console.log(hasSubscribed);
  return (
    <div className={modalWrapper}>
      <div className={styles.topContainer}>
        <div className={modalStyles.iconContainer}>
          <a href="https://www.rappler.com">
            <img src={logo} className={modalStyles.logoImage} />
          </a>
        </div>

        <div className={modalStyles.topHeaderContainer}>
          <p>{topHeaderText}</p>
        </div>

        {hasClose && showDismiss && (
          <button
            className={`ag-ng-dismiss ${styles.close}`}
            onClick={onDismiss}
          >
            X
          </button>
        )}
        {!hasClose && (
          <p className={styles.memberText}>
            Already a member?{" "}
            <a onClick={onLogin} className={`ag-login ${styles.login}`}>
              login
            </a>
          </p>
        )}
      </div>

      {!hasSubscribed && (
        <>
          <div className={styles.headerContainer}>
            <h3 className={modalStyles.headerStyle}>{headerText}</h3>
            <h3 className={modalStyles.subHeaderStyle}>{subHeader}</h3>
          </div>

          <p className={styles.bodyText}>{ReactHtmlParser(bodyText)}</p>
          <div className={styles.btnWrapper}>{children}</div>
        </>
      )}

      {hasSubscribed && (
        <div className={styles.headerContainer}>
          <h3 className={modalStyles.headerStyle}>You're all set,</h3>
          <h3 className={modalStyles.subHeaderStyle}>
            Thank you for subscribing!
          </h3>
        </div>
      )}

      <p className={styles.privacyPolicy}>
        {privacyText}{" "}
        <a
          href="/about/rappler-privacy-statement"
          target="__blank"
          rel="noopener"
        >
          {privacyPolicy}
        </a>
      </p>
    </div>
  );
};

export default AbstractModal;
