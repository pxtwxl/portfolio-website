"use client";
import React, { useEffect, useState } from 'react'

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration: `${Math.random()*5 + 5}s`
})

const FireFliesBackground = () => {
    const [fireflies,setFireFlies] = useState([]);

    useEffect( () => {
        const addFireFliesPeriodically = () => {
            const newFireFly = createFirefly();
            setFireFlies(currentFireFlies => [
                ...currentFireFlies.slice(-14),
                newFireFly
            ]);
        }

        const interval = setInterval(addFireFliesPeriodically,10000);

        return () => clearInterval(interval);

    }, [])
  
    return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
      {
        fireflies.map((firefly) => {
            return <div key={firefly.id}
            className='absolute rounded-full w-[20px] h-[20px] bg-firefly-radial'
            style={{
                top:firefly.top,
                left:firefly.left,
                animation: `move ${firefly.animationDuration} infinte alternate`
            }}></div>
        })
      }
    </div>
  )
}

export default FireFliesBackground
