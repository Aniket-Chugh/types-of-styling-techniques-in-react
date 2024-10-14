import React, { useState } from "react";

function DynamicStylingCss() {
  const[isActive,SetIsActive] = useState(false);
const buttonStyle = {
    backgroundColor: isActive? 'gray' : 'blue',
    borderRadius:'12px',
    color:'pink',
    padding:'12px'
}

return (
    <div>
        <h1>
            this is Dynamicall css , try clicking the button to see , what different.
        </h1>
        <button
        style={buttonStyle} onClick={
            ()=>{
                SetIsActive(!isActive)
            }
        }>Click me </button>
        <h2>
            whats happening is :
            isActive? 'Active': 'InActive'
        </h2>
    </div>
);

}

export default DynamicStylingCss;
