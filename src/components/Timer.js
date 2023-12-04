import React from 'react'

const Timer = ({time}) => {
    const hr = Math.floor(time / 3600000);
  return (
    <div className=' bg-white p-8 flex gap-4 rounded-3xl'>
        <span className="digits">
            {("0"+hr).slice(-2)}
            </span>
             <span className='digits'>:</span>  
        <span className="digits">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            </span>
            <span className='digits'>:</span>
         <span className="digits flex justify-evenly">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
            <span className='digits'>:</span>
            <span className="digits mili-sec">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
    </div>
  )
}

export default Timer