import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Modal from '../Modal'
import Signup from '../Signup/Signup'
const poppins = Poppins({ weight:'500', subsets:['latin']})
const Navbar = () => {
  const [trigger ,setTrigger] = useState<boolean>(false)
  return (
    <>
    <div className={`bg-nav-bg  h-[5rem] w-full text-white ${poppins.className}`}>
      <div className='container w-full h-full mx-auto  max-w-[1440px] '>
        <div className='w-full  h-full flex justify-between  items-center'>
          <div>
            Logo
          </div>
          <div>
            <button onClick={()=>setTrigger(!trigger)} className='w-[5rem] h-[2rem] bg-white text-nav-bg rounded-md hover:border-2 hover:border-nav-bg'>Sign In</button>
          </div>
        </div>
      </div>
    </div>
    <Modal trigger ={trigger} setTrigger = {setTrigger}>
      <Signup/>
      </Modal>
    </>
  )
}

export default Navbar