import React from "react";
import "../Preloader/Preloader.scss";

let Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
  );
};
export default Preloader;
