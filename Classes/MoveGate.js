import React from "react";
import ReactDom from "react-dom";
import AbstractGate from "./AbstractGate";
import MoveModal from "../src/Components/MoveModal/MoveModal.js";

class MoveGate extends AbstractGate {
  constructor(container, config) {
    super(container, config);
  }

  openPlusPage() {
    document.querySelector(".ag-plus-move").click();
  }

  destroy() {
    document.querySelector(".ag-dismiss").click();
  }

  render() {
    ReactDom.render(
      <MoveModal
        header={this.header}
        subheader={this.subheader}
        description={this.description}
        dismissible={this.dismissible}
      />,
      this.container
    );
    window.deep.event({ "event.type": "move-modal-render" });
    window.dataLayer.push({ event: "move-modal-render" });
  }
}

export default MoveGate;
