class AbstractGate {
  constructor(container, config) {
    this.container = container;
    this.header = config.header ?? "";
    this.subheader = config.subheader ?? "";
    this.description = config.description ?? "";
    this.dismissible = config.dismissible ?? false;
    this.freezeScroll = config.freezeScroll ?? false;

    this.isHidden = !0;
    this.lastScrollTop = 0;
    this.widgetVisible = !1;
    this.isScrollDisabled = !1;

    this.handleScroll = this.handleScroll.bind(this);
  }

  init() {
    window.onscroll = this.handleScroll;
  }

  disableScroll() {
    if (!this.isScrollDisabled) {
      this.isScrollDisabled = !0;
      document.body.style.overflowY = "hidden";
    }
  }

  enableScroll() {
    document.body.style.overflowY = "";
    this.isScrollResetLock = !1;
  }

  preventDefault(e) {
    e.preventDefault();
  }

  handleScroll(e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      if (window.pageYOffset > document.body.scrollHeight * 0.1) {
        if (!this.widgetVisible) {
          this.render();

          this.widgetVisible = !0;
          if (this.freezeScroll) this.disableScroll();
        } else {
          if (this.freezeScroll) this.disableScroll();
        }
      }
    } else {
      this.enableScroll();
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  imitateSignupClick() {
    document
      .getElementsByClassName(
        "Button-thxeg-0 StyledComponents__JoinButton-sc-11uybho-5 hZSvol"
      )[0]
      .click();
  }

  imitateLoginClick() {
    document
      .getElementsByClassName(
        "StyledComponents__PrimaryItem-sc-8b50a6-11 StyledComponents__TabletMobilePrimaryItem-sc-11uybho-8 fYDBuC"
      )[0]
      .click();
  }

  openPlusPage() {}

  destroy() {}

  render() {}
}

export default AbstractGate;
