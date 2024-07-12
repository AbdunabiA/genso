"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/src/assets/images/header-bg.png", { as: "image" });
  ReactDOM.preload("/src/assets/logo/logoSmall.png", { as: "image" });
  ReactDOM.preload("/src/assets/logo/logoFull.png", { as: "image" });
  return null;
}
