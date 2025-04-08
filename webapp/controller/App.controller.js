sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";
    return Controller.extend("ui5.walkthrow.controller.App", {
      onInit() {
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      sayHello() {
        MessageToast.show("Hello from App.controller.js");
      },
    });
  }
);
