sap.ui.define(
  [
    // "sap/m/Text"
    // "sap/ui/core/mvc/XMLView",
    "sap/ui/core/ComponentContainer",
  ],
  (
    // XMLView
    ComponentContainer
  ) => {
    "use strict";
    // new Text({ text: "Hello sap UI5..." }).placeAt("contentH1");
    // XMLView.create({
    //   viewName: "sap.ui.demo.walkthrough.view.App",
    // }).then((oView) => {
    //   oView.placeAt("contentH1");
    // });
    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("contentH1");
  }
);
