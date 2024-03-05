'use client'
import { useEffect, useState } from "react";
export default function Animation(){
    const [animation, setAnimation] = useState(1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setAnimation((prevAnimation) => (prevAnimation % 5) + 1);
      }, 800); // Change animation every 1 second
  
      return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);

    return (
        <div className="animation">
          <img src={`/databaseanimation/${animation}.png`} width={90} height={90} alt={`Image ${animation}`} />
        </div>
    );
}