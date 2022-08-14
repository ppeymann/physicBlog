import React from 'react'
import {ThreeCircles} from  'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{width:"100%",height:"1000px" , display:"flex",justifyContent:"center", marginTop:"60px"}} >
    <ThreeCircles
  height="100"
  width="100"
  color="#6d02f7"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
</div>
  )
}

export default Loader