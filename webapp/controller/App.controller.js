sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("ui5.walkthrow.controller.App", {
      sayHello() {
        MessageToast.show("Hello from App.controller.js");
      },
    });
  }
);
