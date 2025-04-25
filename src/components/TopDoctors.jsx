import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function TopDoctors() {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-16 text-gray-800 gap-8'>
        <div className='flex flex-col items-center gap-2'>
        <h1 className=' text-3xl font-medium '>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>

        </div>
        
        <div className='flex flex-wrap justify-center  gap-7 w-full   '>
            {doctors.slice(0,10).map((doctor,index)=>{
                return(
                    <div onClick={()=>navigate(`/appointment/${doctor._id}`)} key={index} className='flex justify-start border border-blue-200 rounded-md cursor-pointer pb-4 flex-col hover:translate-y-[-10px] transition-all duration-500'>
                       
                        <img className='w-52 bg-blue-50 h-52' src={doctor.image} alt="" />
                        <div className='flex flex-col pt-4 px-4 justify-start items-start'>
                      <div className=' flex items-center gap-2 text-sm text-center text-green-500'> <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p></div>  
                        <h1 className='font-medium text-gray-900 text-lg'>{doctor.name}</h1>
                        <p className=' text-gray-500'>{doctor.speciality}</p>
                        </div>
                        
                       
                    </div>
                )
            })}
        </div>
        <button onClick={()=>{navigate(`/doctors`); scrollTo(0,0) }} className='bg-blue-50 text-gray-600 px-12 cursor-pointer py-3 rounded-lg '>More</button>



    </div>
  )
}

export default TopDoctors