import React from 'react'
import {assets} from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between rounded-lg justify-center items-center bg-[var(--primary-color)] px-24 py-24'>

    
    <div className='flex w-2/3 flex-col gap-8'>
      <div className='flex flex-col gap-4'>
      <p className='text-5xl font-semibold  text-white '>Book Appointment</p>
      <p className='text-5xl font-semibold  text-white'>With 100+ Trusted Doctors</p>
      </div>
     
      <button className=' w-1/4 bg-white  px-6 py-3 rounded-lg font-normal transition-colors duration-300 hover:bg-blue-50'>Create Account</button>


    </div>

    <div className='hidden md:block md:w-1/3 relative'>
      <img className=' w-95 h-105 absolute top-[-228px] right-0  ' src={assets.appointment_img} alt="" /> 


    </div>
    
    </div>
  )
}

export default Banner