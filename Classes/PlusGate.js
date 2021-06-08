import React from "react";
import ReactDom from "react-dom";
import AbstractGate from "./AbstractGate";
import PlusModal from "../src/Components/PlusModal/PlusModal.js";

class PlusGate extends AbstractGate {
  constructor(container, config) {
    super(container, config);
  }

  openPlusPage() {
    document.querySelector(".ag-plus").click();
  }

  destroy() {
    document.body.style.overflowY = "";
    document.querySelector(".ag-dismiss").click();
  }

  render() {
    ReactDom.render(
      <PlusModal
        header={this.header}
        subheader={this.subheader}
        description={this.description}
        dismissible={this.dismissible}
      />,
      this.container
    );
    window.deep.event({ "event.type": "plus-modal-render" });
    window.dataLayer.push({ event: "plus-modal-render" });
  }
}

export default PlusGate;
