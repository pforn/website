import React from "react";

function PreLoader({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="spinner"></div>
    </div>
  );
}

export default PreLoader;
