import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="322" y="116" rx="3" ry="3" width="380" height="6" /> 
    <circle cx="138" cy="140" r="131" /> 
    <rect x="16" y="331" rx="10" ry="10" width="254" height="75" /> 
    <rect x="16" y="286" rx="10" ry="10" width="250" height="34" /> 
    <rect x="20" y="427" rx="9" ry="9" width="102" height="33" /> 
    <rect x="183" y="429" rx="10" ry="10" width="85" height="32" />
  </ContentLoader>
)

export default MyLoader