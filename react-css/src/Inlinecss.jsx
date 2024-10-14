import React from "react";

const buttonStyle  = {
backgroundColor : 'red',
color:'white',
padding:'10px 20px'
};

function Inlinecss() {

    return (
        <div>
            <h1>
                yoyo

            </h1>
            <button style={buttonStyle}>Click me!</button>
        </div>
    );
}


export default Inlinecss;
