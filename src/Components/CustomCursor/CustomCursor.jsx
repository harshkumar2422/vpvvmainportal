import React from 'react'
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
   <>
      <AnimatedCursor
        className="abh"
        innerSize={11}
        outerSize={26}
        color="30, 144, 255"
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={2}
        trailingSpeed={4}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> 
    </>
  )
}

export default CustomCursor
