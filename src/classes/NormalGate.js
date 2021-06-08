import React from "react";
import ReactDom from "react-dom";
import AbstractGate from "./AbstractGate";
import NormalModal from "../components/NormalModal/NormalModal.js";

class NormalGate extends AbstractGate {
  constructor(container, config) {
    super(container, config);
  }

  imitateLoginClick() {
    document.querySelector(".ag-login").click();
  }

  imitateSignupClick() {
    document.querySelector(".ag-signup").click();
  }

  destroy() {
    document.body.style.overflowY = "";
    document.querySelector(".ag-dismiss").click();
  }

  render() {
    ReactDom.render(
      <NormalModal
        header={this.header}
        subheader={this.subheader}
        description={this.description}
        dismissible={this.dismissible}
      />,
      this.container
    );

    window.dataLayer.push({
      event: "regwall-experiment-render",
      "regwall-dismissible": this.dismissible,
    });
    window.deep.event({ "event.type": "register-modal-render" });
    window.deep.event({ "event.type": "regwall-render" });
  }
}

export default NormalGate;
