import React, { useEffect, useRef, useState } from 'react'
import { HeaderSDK } from './HeaderSDK';


export const Home = ({name}) => {
    const buttonRef = useRef();
    const [localCount, setLocalCount] = useState(0);

    useEffect(()=>{
        function increase(){
          const {headerState} = window.__header__;
          ++headerState.count;
        }
        buttonRef.current.addEventListener('click', increase);
        return ()=>{
            buttonRef.current.removeEventListener('click', increase);
        }
    }, []);

    useEffect(()=>{
        const { subscribe, headerState} = window.__header__;
        const unsubscribe = subscribe(headerState, () => {
            setLocalCount(headerState.count)
        })

        return ()=>{
            unsubscribe();
        }
    }, [])
    
    return (
        <>
            <HeaderSDK/>
            <h1>Hello, {name}</h1>
            <p>Header count: {localCount}</p>
            <button ref={buttonRef}>increase</button>
            <p>Click increase to make sure count increases, so that we know React has hydrated</p>

            <a href="/app1/client-side-routing">Client Side Routing</a>
        </>
    )
}
