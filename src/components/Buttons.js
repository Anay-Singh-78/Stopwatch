import React from 'react'
import {FaPause  ,FaPlay} from 'react-icons/fa6'
import {BiReset} from 'react-icons/bi'
import { GiFlyingFlag } from "react-icons/gi";
const Buttons = ({time ,isActive ,isStop , handleStart,handleReset,playAndPause , handleLap}) => {
  return (
    <div className='w-full justify-center flex'>
        {
            isActive === false ? (<button className=' play w-[3.5rem] rounded-full flex justify-center items-center aspect-square ' onClick={handleStart}>
                <FaPlay className='  w-10 h-10  '  />
            </button>) : (<div className='w-[50%] max-w-[20rem] flex justify-evenly '>
                {
                    isStop === false ? (    <button onClick={playAndPause}  className=' play w-[3.5rem] rounded-full flex justify-center items-center aspect-square '>
                        <FaPause className=' w-10 h-10 '/>
                 </button>):(<button onClick={playAndPause}  className=' play w-[3.5rem] rounded-full flex justify-center items-center aspect-square '>
                <FaPlay className=' w-10 h-10'/>
                </button>)
                }
                <button onClick={handleReset}  className=' reset w-[3.5rem] rounded-full flex justify-center items-center aspect-square '>
                    <BiReset className=' w-10 h-10 '/>
                </button>
                <button className=' reset w-[3.5rem] rounded-full flex justify-center items-center aspect-square ' onClick={handleLap}>
                <GiFlyingFlag  className=' w-10 h-10 '/>
                </button>
            </div>)
        }
    </div>
  )
}

export default Buttons