import React from 'react'
import { useState, useEffect } from 'react'
import Buttons from './Buttons';
import Timer from './Timer';
import LapWatch from './LapWatch';
const StopWatch = () => {
   
    const [time, setTime] = useState(0);
    const [isStop, setIsStop] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [lap , setLap] = useState([]);
    const hr = Math.floor(time / 3600000);
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
    const formatWithLeadingZero = (number) => { 
        if (number < 10) return "0" + number; 
        else return number.toString(); 
    }; 
    const handleStart = () => {
        setIsActive(true);
        setIsStop(false);
    }
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
        setLap([]);
    }
    const playAndPause = () => {
        setIsStop(prev => !prev);
    }
    const handleLap = () =>{
        const lapTime = 
        formatWithLeadingZero( (hr)) + 
        ":" + 
        formatWithLeadingZero(( Math.floor((time / 60000) % 60))) + 
        ":" + 
        formatWithLeadingZero(( Math.floor((time / 1000) % 60))) + 
        "." + 
        formatWithLeadingZero((((time / 10) % 100)) ); 
      console.log(lap);
    setLap((prevLaps) => [...prevLaps, lapTime]); 
    }
    return (
        <div className="App flex flex-col min-h-screen items-center justify-center gap-10">
            <div className='flex flex-col items-center'>
                <h1 className="text-4xl mainText mt-10">Stopwatch Project</h1>
                <p className='catchPhrase'>Let's race against time</p>
            </div>
            <Timer time={time} />
            <Buttons
                time={time}
                isActive={isActive}
                isStop={isStop}
                handleStart={handleStart}
                handleReset={handleReset}
                playAndPause={playAndPause}
                handleLap= {handleLap}
                lap={lap}
            />
       {
        lap.length > 0 ? <LapWatch laps={lap}/>: (<div></div>)
       } 
        </div>
    )
}

export default StopWatch