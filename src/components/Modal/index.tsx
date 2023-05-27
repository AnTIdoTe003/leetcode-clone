"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  trigger: boolean;
  children :React.ReactNode,
  setTrigger: any
};

const Modal = ({ trigger , children, setTrigger}: Props) => {
  console.log(trigger)
  return trigger ? <>
  <div  className="fixed h-screen w-screen bg-red-200 backdrop-blur-md ">
    <div className="z-50" >
      <button  onClick={()=>setTrigger=(false)}>Cancel</button>
    </div>
    <div >
      {children}
    </div>
  </div>
  </> : null;
};

export default Modal;
