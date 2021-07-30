import NormalGate from "./NormalGate.js";
import MoveGate from "./MoveGate.js";
import PlusGate from "./PlusGate.js";
import NewsLetterGate from "./NewsLetterGate.js";

const container = document.createElement("div");
document.body.appendChild(container);

class RapplerModal {
  constructor(config) {
    this.config = { ...config };
  }

  init() {
    let o;
    const type = this.config.type.toLowerCase();
    const config = this.config;

    if (type === "normal") {
      o = new NormalGate(container, config);
    } else if (type === "move") {
      o = new MoveGate(container, config);
    } else if (type === "plus") {
      o = new PlusGate(container, config);
    } else if (type === "newsletter") {
      o = new NewsLetterGate(container, config);
    } else {
      console.log("Unknown modal type");
      return;
    }

    o.init();

    this.o = o;
  }

  disableScroll() {
    this.o.disableScroll();
  }

  enableScroll() {
    this.o.enableScroll();
  }

  preventDefault(e) {
    this.o.preventDefault(e);
  }

  handleScroll(e) {
    this.o.handleScroll(e);
  }

  imitateSignupClick() {
    this.o.imitateSignupClick();
  }

  imitateLoginClick() {
    this.o.imitateLoginClick();
  }

  openPlusPage() {
    this.o.openPlusPage();
  }

  destroy() {
    this.o.destroy();
  }

  render() {
    this.o.render();
  }
}

export default RapplerModal;
