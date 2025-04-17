sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter
        .getRoute("detail")
        .attachPatternMatched(this.onObjectMatched, this);
    },

    onObjectMatched(oEvent) {
      this.getView().bindElement({
        path:
          "/" +
          window.decodeURIComponent(
            oEvent.getParameter("arguments").invoicePath
          ),
        model: "invoice",
      });
    },
  });
});
