import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "key", key: 0}, "Hello everyone!");

const h1 = React.createElement("h1", { id: "key1",key: 1 }, "Heading 1");

const h2 = React.createElement("h2", { id: "key2", key:2 }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);