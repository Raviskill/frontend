import React, { useState, useEffect } from "react";

const Counter = () => {
  const [time, setTime] = useState(0); 
  const [isRun, setIsRun] = useState(false); 
  const [bgColor, setBgColor] = useState("white"); 

  useEffect(() => {
    if (isRun && time > 0) {
      const timeId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timeId);
    } else if (time === 0) {
      setIsRun(false);
    }
  }, [time, isRun]);

  const minute = () => {
    const hour = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((time % 3600) / 60)
      .toString()


      
      .padStart(2, "0");
    const second = (time % 60).toString().padStart(2, "0");
    return `${hour}h ${minute}m ${second}s`;
  };

  const handleStart = () => {
    setIsRun(true);
    setBgColor("red"); 
  };

  const handlePause = () => {
    setIsRun(false);
    setBgColor("blue"); 
  };

  const handleReset = () => {
    setTime(0);
    setBgColor("grey"); 
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-lvh"
   style={{ backgroundColor: bgColor }} 
    >
      <div>
        <button className="bg-black text-white btn"onClick={handleStart} disabled={isRun}>Start</button>
        <butto className="btn bg-black text-white"onClick={handlePause}disabled={isRun}>Pause</butto>
        <button className="btn bg-black text-white"onClick={handleReset}>Reset</button>
      </div>

      <div>
        <input
          type="number"
          placeholder="Set time in seconds"
          onChange={(e) => setTime(parseInt(e.target.value))}
          disabled={isRun}
        />
      </div>

      <div>
        <h2 className="btn bg-black text-white">{time > 0 ? `${minute()} remaining` : "Time up"}</h2>
      </div>
    </div>
  );
};

export default Counter;
