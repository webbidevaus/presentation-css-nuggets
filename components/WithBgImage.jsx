import React from "react";

export default ({ src, children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      "background-image": "src(" + src + ")"
    }}
  >
    {children}
  </div>
);
