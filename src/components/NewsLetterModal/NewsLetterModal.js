import React, { useState } from "react";
import AbstractModal from "../AbstractModal/AbstractModal";
import styles from "./NewsLetterModal.module.scss";

const NewsLetterModal = ({ header, subheader, description, dismissible }) => {
  const [displayModal, setDisplayModal] = useState(true);
  const [emailAddress, setEmailAddress] = useState("");
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const saveEmail = async (email) => {
    const api = `https://asia-east2-rapplerinternal.cloudfunctions.net/mailchimp-api-dev-subscribe-v2?email=${email}`;

    try {
      const response = await fetch(api);
      const jsonResponse = await response.json();
      // api returns {status:"ok", result:uniqueEmailID}
      // if result === "", email may be invalid or is already in the mailchimp audience
      // if result is not an empty string, email is valid and has been added to mailchimp audience
      return jsonResponse.status === "ok" && jsonResponse.result !== "";
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.dataLayer.push({ event: "newsletter-modal-click" });
    window.deep.event({ "event.type": "newsletter-modal-click" });
    const isSuccessful = await saveEmail(emailAddress);

    setHasSubscribed(isSuccessful);

    if (isSuccessful) {
      window.dataLayer.push({ event: "newsletter-modal-success" });
      window.deep.event({ "event.type": "newsletter-modal-success" });
    } else {
      window.dataLayer.push({ event: "newsletter-modal-failed" });
      window.deep.event({ "event.type": "newsletter-modal-failed" });
    }

    setDisplayModal(!displayModal);
  };

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleDismiss = (e) => {
    if (dismissible) {
      window.dataLayer.push({ event: "newsletter-modal-dismiss" });
      window.deep.event({ "event.type": "newsletter-modal-dismiss" });
      setDisplayModal(!displayModal);
      document.body.style.overflowY = "";
    }
  };

  return (
    <AbstractModal
      showModal={displayModal}
      topHeaderText="Never Miss the latest news"
      headerText={header}
      subHeader={subheader}
      bodyText={description}
      modalStyles={styles}
      hasClose={true}
      onDismiss={handleDismiss}
      showDismiss={dismissible}
      hasSubscribed={hasSubscribed}
      privacyText="By signing up, you agree to and acknowledge our"
      privacyPolicy="Privacy Policy."
    >
      <form onSubmit={handleSubmit}>
        <div className={styles.emailWrapper}>
          <input
            type="email"
            name="email"
            placeholder="ENTER EMAIL ADDRESS..."
            className={styles.emailStyles}
            value={emailAddress}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={!emailAddress}
          className={`ag-dismiss ${styles.btnSignUp}`}
        >
          Sign up now
        </button>
      </form>
    </AbstractModal>
  );
};

export default NewsLetterModal;
