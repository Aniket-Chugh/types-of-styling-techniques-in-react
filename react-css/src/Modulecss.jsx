import React from "react";
import style from './cssButton.module.css'; // Importing CSS module

function ModuleCss() {
  return (
    <div>
      <h1 className={style.h1}>
        Module CSS, using it, we are styling components
      </h1>
      {/* Correctly applying the CSS module style */}
      <button className={style.buttoncss}>Click me</button>
    </div>
  );
}

export default ModuleCss;
