import React from "react"
import Inlinecss from "./inlineCss"
import StyleSheetcss from "./Stylesheetcss"
import ModuleCss from "./Modulecss"
import DynamicStylingCss from "./Dynamicstyling"



function App() {


  return (
    <div>
        <h1>Types of Styling techniques , we can do to add style in the code !</h1>
<h1>Inline css</h1>
        <Inlinecss></Inlinecss>
        <hr></hr>
        <StyleSheetcss></StyleSheetcss>
        <hr></hr>
        <ModuleCss></ModuleCss>
        <hr />
        <DynamicStylingCss></DynamicStylingCss>
    </div>
  )
}

export default App
