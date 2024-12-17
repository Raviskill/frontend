import React from 'react'
import { useState , useEffect } from 'react'

const Counter = () => {

    const [time , setTime] = useState(0)

    const [isRun , setIsRun] = useState(false)

    useEffect(() => {
        if(isRun && time > 0){
            let timeid = setInterval(() => {
                setTime((prev) => prev - 1 )
            } , 1000)
            return () => clearInterval(timeid)
        }
        else if(time === 0){
            setIsRun(false)
        }
    } , [time , isRun])

    const minute = ()=>{
        const hour = Math.floor(time / 3600).toString().padStart(2,0)
        const minute = Math.floor((time % 3600) / 60).toString().padStart(2,0)
        const second = (time % 60).toString().padStart(2,0)
        return `${hour}h ${minute}m ${second}s`
    }
  return (
    <div className='flex flex-col justify-center items-center h-lvh'>
        {/* <h1 className='heading'>This is React Counter App</h1> */}
    
        <div>
        <button className='bg-black text-white btn' onClick={() => setIsRun(true)} disabled={isRun}>Start</button>
        <button className='btn bg-black text-white' onClick={() => setIsRun(false)}>Pause</button>
        <button className='btn bg-black text-white' onClick={() => setTime(0)}>Reset</button>
        </div>


<div>
        <input type="number" placeholder='setTime in seconds' onChange={(e) => setTime(parseInt(e.target.value))} disabled={isRun} />
</div>
<div>

<h2 className='btn bg-black text-white'>{time > 0 ? `${minute()} remaining` : 'time up'}</h2>

</div>
    </div>
  )
}

export default Counter