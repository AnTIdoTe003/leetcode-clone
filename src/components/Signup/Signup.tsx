import React from 'react'

const Signup = () => {
  return (
    <div className='w-[400px] h-[300px] bg-white text-nav-bg rounded-md'>
        <div>
            <form >
                <div className='flex flex-col'>
                    <label className='text-lg' htmlFor="">Enter your Name</label>
                    <input className='px-2 w-[70%] outline-none border-2 border-nav-bg  rounded-md h-[3rem]' type="text" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg' htmlFor="">Enter your Email</label>
                    <input className='px-2 w-[70%] outline-none border-2 border-nav-bg  rounded-md h-[3rem]' type="email" />
                </div>

            </form>
        </div>
    </div>
  )
}

export default Signup