import React, { useEffect } from 'react'

const MemoryLeak = () => {
    let interval = setInterval(() => {
        console.log('mai baar baar chal rha hu har 1sec me ...')
    }, 1000)

    useEffect(() => {
        console.log('mai card ke andar ka useEffect hu');

        // return component ke unmount hone ke samay chalta hai
        return () => {
            console.log('mai useEffect ke andar ka return hu');
            console.log('band ho ja interval');
            clearInterval(interval);
        }
    },[])

    return (
        <div>
            <h1 className='text-2xl tracking-wider'>Jab mujhe mount kara jaega toh mera functional component ka useEffect trigger hoke ke baar chalega phir 1second badd setInterval chalega aur agar hamne reuturn nhi karaya useEffect me to jab Functional Component render tree se hat jaega yani ki unmount ho jaega tab bhi setInterval chalta hi rhega jisse memory leak hogi isliye ham return karte hai taki jab unmount ho to wo usko kill karde</h1>
        </div>
    )
}

export default MemoryLeak