import React from 'react'
import {
    MDBBadge
  } from "mdb-react-ui-kit";
function CustomBadge({text}) {
    return (
        <MDBBadge style={{marginRight: "5px"}} className='cursor-pointer' tag="a" color="none">{text}</MDBBadge>
    )
}

export default CustomBadge