import React, { useState } from "react";
import AbstractModal from "../AbstractModal/AbstractModal";
import styles from "./PlusModal.module.css";

const PlusModal = ({ header, subheader, description, dismissible }) => {
  const [displayModal, setDisplayModal] = useState(true);

  const handlePlus = (e) => {
    window.deep.event({ "event.type": "plus-modal-click" });
    window.dataLayer.push({ event: "plus-modal-click" });
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
      logo="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjUxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjYyLjY4Ny4wNThsLjI4Ni0uMDI2Yy4yMTQtLjAyLjMyMS0uMDMuNDI3LS4wM2g0Ljc3NGM2LjM2NS0uMDAzIDEyLjcyNy0uMDA2IDE5LjA3Ny4wMzdhMTYuMyAxNi4zIDAgMDE3LjcgMS45ODdjNC42MjggMi40OTcgNi45MTQgNi40ODggNy4zNzEgMTEuNTkuMjM4IDIuNTg5LjAzNyA1LjE0LS45MTQgNy42LTEuNzE5IDQuNDI5LTUuMDQ4IDcuMDcyLTkuNDc1IDguNTQ4YTQyLjI3MyA0Mi4yNzMgMCAwMC0uODczLjI3OS40MzUuNDM1IDAgMDAtLjAzMi4wM2wtLjA1My4wNTJhMy4zOTUgMy4zOTUgMCAwMS0uMTAyLjA5NGwzLjAyNyAzLjk5YTE1ODkzLjU1IDE1ODkzLjU1IDAgMDExMi40NjUgMTYuNDQuNTA4LjUwOCAwIDAwLS4wMzQuMDM4LjE4LjE4IDAgMDEtLjA1OC4wNTMgMzU0NzkuMTU2IDM1NDc5LjE1NiAwIDAxLTI4Ljk1NC0xOS45MnYxMy4xMDRsLS4yMjUuMDJoLS4wMDFjLS4zMzYuMDI4LS42MjIuMDUzLS45MDguMDUzaC03LjQwN2MtLjYwNSAwLS45MDYgMC0xLjA1Ny0uMTUtLjE1LS4xNTEtLjE1LS40NTItLjE1LTEuMDUzbC0uMDAzLTkuMzU3di0uMDA3Yy0uMDAzLTkuMzY4LS4wMDctMTguNzQyLjAyMS0yOC4xMDUgMC0xLjAyMS0uMjc0LTEuNjc3LTEuMDk4LTIuMjc5LS44MjItLjU3NC0xLjYxOS0xLjIyMy0yLjQ4MS0xLjkyMy0uNDIyLS4zNDQtLjg2LS43LTEuMzIzLTEuMDY1em0xNC42ODcgOS4wMnYxMy4xMDRjLjExNC4wMDguMjE2LjAxOS4zMS4wMjkuMTMyLjAxNC4yNDkuMDI2LjM2Ny4wMjYuODY1IDAgMS43MjguMDAyIDIuNTkuMDA0aC4wMDZjMS43MjUuMDA0IDMuNDQ3LjAwOCA1LjE3Ny0uMDA0IDQuOTM5LS4wNzMgNy45MzgtNC4wNjQgNi42NC04LjgwMi0uNjk1LTIuNTctMi44MTctNC4yMjktNS44NTMtNC4zNTYtMi4wNjQtLjA5MS00LjEyOS0uMDktNi4xOTMtLjA4OC0uODI1LjAwMS0xLjY1MS4wMDItMi40NzctLjAwMy0uMTQyIDAtLjI2NS4wMjctLjM5Ni4wNTZhNS4xMjEgNS4xMjEgMCAwMS0uMTcxLjAzNXpNNS4xOTQgNDMuOTYydi0xLjI3NmMwLTEyLjU3NSAwLTI1LjE1LjAxOS0zNy43MjUgMC0uNzQ3LS4yMi0xLjIyLS44NDItMS42NC0xLjA4OS0uNzU2LTIuMTQ3LTEuNTUyLTMuMjYtMi4zOUMuNzQ5LjY1NC4zNzkuMzc2IDAgLjA5M0wuMTg2LjA1NkMuMzQuMDIzLjQzNi4wMDMuNTMuMDAzTDUuMzE1LjAwMmM2LjM4LS4wMDMgMTIuNzYzLS4wMDYgMTkuMTU4LjAzOCAyLjg5LjAxOCA1LjY3Ljc0NyA4LjE5NCAyLjE2OCA0LjY4MiAyLjY0MyA2Ljk4NyA2Ljc2MiA3LjM1MiAxMi4wMS4xNDcgMi4yMjQtLjA3MyA0LjQxLS44MjMgNi41NDMtMS42NDYgNC42ODQtNS4xMDMgNy40NTQtOS42OTQgOS4wMDMtLjIzOC4wODQtLjQ3Ni4xNTctLjgxMy4yNmwtLjMzOS4xMDQgMy4wNDggNC4wNDNjNC4xNTYgNS41MTIgOC4yNzYgMTAuOTc3IDEyLjQwOCAxNi40NDJsLS4xMS4xMWEzNzIyOC45NiAzNzIyOC45NiAwIDAxLTEyLjA3NC04LjM1N2wtLjAwMy0uMDAyYy01LjQ5OS0zLjgwNy0xMS4wMi03LjYzLTE2LjYwMy0xMS40ODgtLjAwOC4yMS0uMDIuMzg3LS4wMy41NDctLjAxMy4yLS4wMjQuMzc0LS4wMjQuNTQ2bC0uMDAzIDIuNzc1Yy0uMDAzIDIuNzc1LS4wMDcgNS41NS4wMiA4LjMyNCAwIC43NjUtLjIzNy45ODQtLjk4Ny45NjYtMS45Ni0uMDI3LTMuOTIyLS4wMjQtNS44OS0uMDJsLTEuOTc1LjAwMmExMC4zIDEwLjMgMCAwMS0uOTMzLS4wNTV6bTkuODIyLTM0Ljl2MTMuMTc2Yy40OCAwIC45NTMuMDAyIDEuNDIuMDA0LjkyLjAwNCAxLjgyMy4wMDggMi43MzItLjAwNC40NDQtLjAwOS44OS0uMDExIDEuMzM1LS4wMTMgMS40MTMtLjAwOCAyLjgzMS0uMDE2IDQuMjA3LS4yMjQgMy40MDItLjUxIDUuNTQyLTMuMDggNS42MTYtNi4zNzguMDczLTMuMjQ0LTEuNzItNS41MjItNS4wMy02LjMwNi0uNjIyLS4xNDYtMS4yNjItLjI1NS0xLjg4NC0uMjU1LTEuOTE4LS4wNDEtMy44MzYtLjA1MS01Ljc0Ni0uMDYybC0xLjkxOC0uMDExYTIuMzk1IDIuMzk1IDAgMDAtLjU2MS4wNDYgOS40NzIgOS40NzIgMCAwMS0uMTcuMDI3em0yMTkuOTM2IDI2LjQ3aC0uMDAxYy0uMTg3LS4wMS0uMzgzLS4wMi0uNTk2LS4wMjYgMC0uNDAyIDAtLjczLjA1NS0xLjA1OCAwLS43Ni0uMDAyLTEuNTE4LS4wMDQtMi4yNzUtLjAwNC0xLjUxMi0uMDA4LTMuMDIyLjAwNC00LjU0LjAwMi0uMTkyLjAwMS0uMzU5IDAtLjUwNC0uMDA0LS40NzctLjAwNS0uNzIyLjExNy0uODQ4LjEyOS0uMTMzLjM5OC0uMTMxLjk1NC0uMTI3bC4zNzQuMDAyaDE5LjMzM3YtOC41MjloLTIwLjcwNXYtOS4wNGgyMy42MTN2LTguNGE0MC42NzYgNDAuNjc2IDAgMDEtLjE3MS0uMDIgNS45MzIgNS45MzIgMCAwMC0uNjg5LS4wNTRjLTEwLjQ5OCAwLTIxLjAxNSAwLTMxLjUxNC0uMDE4LS43MTMgMC0uOTMzLjIxOS0uOTMzLjkzLjAxOCAxNC4wMzIuMDE4IDI4LjA2NiAwIDQyLjA5OSAwIC42NTYuMTY1LjkxLjg2LjkxIDEwLjY0NS0uMDE3IDIxLjMwOC0uMDE3IDMxLjk3MSAwIC42OTUgMCAuODc4LS4yNTQuODYtLjkxLS4wMjctMS41Ny0uMDI0LTMuMTI4LS4wMjEtNC42OTJ2LS4wMDZjLjAwMi0uNTIzLjAwMy0xLjA0Ny4wMDMtMS41NzIgMC0uNjUgMC0uOTczLS4xNjItMS4xMzQtLjE2MS0uMTYtLjQ4MS0uMTYtMS4xMTktLjE2SDIzNS44Yy0uMjggMC0uNTUyLS4wMTMtLjg0Ny0uMDI4aC0uMDAxek05My44NjYgNDQuMzQ0aC0xLjk0MWMtMi41NDguMDA0LTUuMDMyLjAwNy03LjUxNS0uMDM3LS4yNzQgMC0uNjU4LS4zNjQtLjc4Ni0uNjU2YTMyOS45OTIgMzI5Ljk5MiAwIDAxLTMuNDItOC4zMWMtLjI1Ny0uNjItLjUzLS44NzUtMS4yNDQtLjg3NS01LjY4OS4wMzYtMTEuMzk1LjAxOC0xNy4wODMgMC0uNjQgMC0uOTcuMTgyLTEuMjA4LjgwMmEzNjguNTIzIDM2OC41MjMgMCAwMS0zLjQ1NyA4LjQwMWMtLjEyOC4yOTItLjUxMi42MzgtLjc4Ni42MzgtMi4xOTUuMDI3LTQuMzkuMDI0LTYuNTg0LjAybC0yLjE5NS0uMDAyYy0uMDg2IDAtLjE3Mi0uMDIyLS4zMS0uMDU4bC0uMTMtLjAzM2MuNDQ0LTEuMDUzLjg4LTIuMDc4IDEuMzE0LTMuMDk3bC43OS0xLjg2IDMuMDM0LTcuMDc5LjA2NS0uMTUyLjAyNS0uMDU4YzQuNDE0LTEwLjI5NyA4LjgzMy0yMC42MDcgMTMuMjI4LTMwLjkyOC4yOTItLjY5My42NC0uOTQ4IDEuNDA4LS45NDggMi4zNzguMDU1IDQuNzU1LjAzNyA3LjEzMyAwIC41NDkgMCAuODc4LjEyOCAxLjExNi42NzUgMy4wNTUgNy4xNTMgNi4xMTQgMTQuMzA2IDkuMTczIDIxLjQ2IDMuMDU5IDcuMTUyIDYuMTE4IDE0LjMwNiA5LjE3MiAyMS40NTkuMDQxLjEwMi4wNy4yMDQuMTA1LjMyMi4wMjcuMDkzLjA1Ni4xOTYuMDk2LjMxNnpNNzQuMDczIDIwLjQxOGwtLjAwMi0uMDA2YTQxNjkuNDg5IDQxNjkuNDg5IDAgMDEtMy41MjUtOC41NjNjLS4wNDYgMC0uMDg3LjAwNS0uMTI4LjAwOS0uMDQxLjAwNS0uMDgyLjAxLS4xMjguMDFhNDY0OC44NzcgNDY0OC44NzcgMCAwMS0zLjA5IDcuNTEyYy0uOTA4IDIuMjAzLTEuODIyIDQuNDItMi43NDQgNi42NjVoMTEuMTRjLjEzIDAgLjI2Mi0uMDE2LjQzOS0uMDM3bC4zMjgtLjAzNmMtLjc2NS0xLjg2MS0xLjUyOC0zLjcxMi0yLjI4OS01LjU1NXpNMTUyLjkgMzEuMzMzYy4wMDktLjE0OS4wMTktLjMwNS4wMjYtLjQ3NmgzLjM4NGMuNDg3LS4wMDIuOTc1LS4wMDIgMS40NjEtLjAwMWguMDAxYzIuNjE3LjAwNCA1LjIyLjAwOCA3LjgxMS0uNTQ1IDEyLjI1NS0yLjYwNyAxNC41NTktMTMuMjY4IDExLjUyMy0yMS4wMzItMi4zNzgtNi4wODctNy40OTktOC43MTEtMTMuNy05LjAyLTQuMjMxLS4yMDUtOC40NzEtLjE4LTEyLjcwOC0uMTU0LTIuMTkxLjAxMy00LjM4MS4wMjYtNi41Ny4wMDctLjc2OC0uMDE4LS44OTYuMjkyLS44OTYuOTY2LjAxOCAxMy45OTcuMDE4IDI3Ljk5MyAwIDQxLjk5IDAgLjc2NS4yMzggMS4wMDIuOTg4Ljk4NCAyLjUyNC0uMDM2IDUuMDQ4LS4wNTUgNy41NzIgMCAuOTE0LjAxOCAxLjExNi0uMzEgMS4wOTctMS4xNDgtLjAyNy0yLjcyLS4wMjQtNS40NS0uMDItOC4xNzZ2LS4wMDJsLjAwMi0yLjcyYzAtLjIyMy4wMTQtLjQzOS4wMjktLjY3M3ptLS4wMjktOS44NjF2LTUuOTA1bC4wMDItMS40NDh2LS4wMDNjLjAwNC0xLjQ1LjAwNy0yLjkwNS0uMDItNC4zODEgMC0uNzY1LjE4My0xLjA3NSAxLjAyNC0xLjA1NyAxLjAzMS4wMzQgMi4wNjUuMDMyIDMuMDk4LjAzMSAxLjc3MS0uMDAxIDMuNTQyLS4wMDMgNS4yOTcuMTcgNS43OTguNTgzIDcuMDQyIDUuMjg1IDUuNzk4IDkuMDAyLS44NTkgMi42MDctMi45NDQgNC4wMS01LjU0MiA0LjI0Ny0yLjA5LjIwMy00LjE5LjIwMy02LjI5Mi4yMDItLjkxNCAwLTEuODI4IDAtMi43NDMuMDE2LS42MjYuMDE4LS42MjQtLjM5My0uNjIyLS44MDl2LS4wNjV6bS00Mi4yODcgOS4zODV2MTMuMDY3YTMuOTc3IDMuOTc3IDAgMDAtLjMxLjA1NyAxLjc4NCAxLjc4NCAwIDAxLS4zNjcuMDUzbC0yLjAzLS4wMDNhNDAzLjE2OCA0MDMuMTY4IDAgMDAtNi4xMDkuMDJjLS42NTkgMC0uODIzLS4yMzYtLjgyMy0uODU2LjAxOC0xNC4wNy4wMTgtMjguMTIgMC00Mi4xOSAwLS42NzQuMjAxLS44OTMuODc4LS44OTMgMi4zNzMuMDE0IDQuNzUuMDIgNy4xMjcuMDI2IDMuOTYuMDEgNy45MjIuMDIgMTEuODc2LjA2NSAyLjU3OS4wMzcgNS4wNjcuNjkzIDcuMzUzIDEuOTE0IDUuNDUxIDIuODggNy43MzcgNy41NDUgNy43MTkgMTMuNTIzLS4wNTUgOC4zMS01LjU0MiAxMy4yNDktMTIuNzEyIDE0LjY1Mi0xLjg0Ny4zNjUtMy43MzEuNDc0LTUuNjE1LjU0Ny0xLjU3NS4wNjMtMy4xNS4wNDgtNC43NjYuMDMyLS43MzEtLjAwNy0xLjQ3LS4wMTQtMi4yMjEtLjAxNHptMC0xNS4zMjd2Ni4wODdjMCAuNDU2LjA1NS43NjYuNjIyLjc0Ny45NDItLjAxNyAxLjg4Ni0uMDIgMi44MzEtLjAyMiAyLjAwOC0uMDA1IDQuMDE5LS4wMTEgNi4wMjEtLjE2IDMuNjc3LS4yOTEgNi4xODItMy4yMDcgNi4xMjgtNi43OTctLjA1NS0zLjY0NS0yLjQ4OC02LjI1Mi02LjI3NC02LjQ4OC0xLjgxNi0uMTE2LTMuNjM5LS4xMy01LjQ1OS0uMTQyaC0uMDAxYy0xLjA0LS4wMDctMi4wODEtLjAxNC0zLjExOC0uMDQtLjY0LS4wMTktLjc1LjI3My0uNzUuODIuMDEyIDEuMzIzLjAwOCAyLjY1NS4wMDQgMy45OS0uMDAyLjY2OC0uMDA0IDEuMzM2LS4wMDQgMi4wMDV6bTEwNi42ODcgMTkuODQ3aC0yMi4wNzZjMC0xMS44MSAwLTIzLjQ5Mi4wMTgtMzUuMjY1aC0xLjAyNGMtLjcxNiAwLTEuNDMzLjAwMy0yLjE0OS4wMDZhMjA1LjA0IDIwNS4wNCAwIDAxLTUuMzUtLjAyNGMtLjkxNS0uMDE4LTEuMDk4LjMxLTEuMDk4IDEuMTQ4LjAzNyAxMy44ODcuMDM3IDI3Ljc1NiAwIDQxLjY0NCAwIC44OTMuMjIgMS4xNjYgMS4xNTMgMS4xNjYgOS44Mi0uMDE4IDE5LjY1OC0uMDE4IDI5LjQ5Ni0uMDE4aC4wMDZjLjIxMyAwIC40MjUtLjAyLjYzNC0uMDQuMTMyLS4wMTQuMjYzLS4wMjYuMzktLjAzM3YtOC41ODR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNDAgMTQuODJjMCA4LjE4My02LjY1OCAxNC44MTYtMTQuODcgMTQuODE2LTguMjEzIDAtMTQuODctNi42MzMtMTQuODctMTQuODE2UzMxNi45MTcuMDAzIDMyNS4xMy4wMDNDMzMzLjM0Mi4wMDMgMzQwIDYuNjM3IDM0MCAxNC44MnptLTEyLjk0OS02LjI1MmgtMy44NTl2NC42MjZoLTQuNjQ4djMuODQ2aDQuNjQ4djQuNjMyaDMuODU5VjE3LjA0aDQuNjQ0di0zLjg0NmgtNC42NDRWOC41Njh6IiBmaWxsPSIjRjA0RjNDIi8+PC9zdmc+"
      headerText={header}
      subHeader={subheader}
      bodyText={description}
      modalStyles={styles}
      hasClose={true}
      onDismiss={handleDismiss}
    >
      <button className={`ag-plus ${styles.button}`} onClick={handlePlus}>
        Learn More
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

export default PlusModal;
