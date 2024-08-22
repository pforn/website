import React from "react";

const PreLoader = (props) => {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && <div className="spinner"></div>}
    </div>
  );
};

export default PreLoader;
