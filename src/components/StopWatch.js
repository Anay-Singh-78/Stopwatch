import React from 'react'
import { useState, useEffect } from 'react'
import Buttons from './Buttons';
import Timer from './Timer';
const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isStop, setIsStop] = useState(true);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let id = null;
        if (!isStop && isActive) {
            id = setInterval(() => { setTime(prev => prev + 10) }, 10);
        }
        else {
            clearInterval(id);
        }
        return () => {
            clearInterval(id);
        }
    }, [isStop, isActive])
    const handleStart = () => {
        setIsActive(true);
        setIsStop(false);
    }
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    }
    const playAndPause = () => {
        setIsStop(prev => !prev);
    }
    // const increaseTime = ()=>{
    //   setInterval(function(){
    //     setMili(prev => prev+1);
    //     if(mili>99){
    //       setMili(0);
    //       setSec(prev =>prev+1)
    //     }
    //   },10000)

    // }
    useEffect(() => {
        // increaseTime();
    }, [])
    return (
        <div className="App flex flex-col h-screen items-center justify-center gap-10">
            <div className='flex flex-col items-center'>
                <h1 className="text-4xl mainText">Stopwatch Project</h1>
                <p className='catchPhrase'>Let's race against time</p>
            </div>
            {/* <p className="text-white">{hrs}:{min}:{sec}:{mili}</p> */}
            <Timer time={time} />
            <Buttons
                time={time}
                isActive={isActive}
                isStop={isStop}
                handleStart={handleStart}
                handleReset={handleReset}
                playAndPause={playAndPause}
            />
            {/* <div className="flex gap-8">
        <button className=" bg-rose-300 hover:scale-125 hover:bg-rose-400 px-4 py-1 rounded-xl">Start</button>
        <button  className=" bg-rose-300 hover:scale-125 hover:bg-rose-400 px-4 py-1 rounded-xl">Reset</button>
        <button className=" bg-rose-300 hover:scale-125 hover:bg-rose-400 px-4 py-1 rounded-xl">Stop</button>
      </div> */}
        </div>
    )
}

export default StopWatch