import { useEffect, useState } from 'react';

export const useHeaderState = ()=>{
    console.log('useHeaderState invoked')
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const {subscribe, snapshot} = window.__header__;
        const unsubscribe = subscribe(window.__header__.headerState, ()=>{
            const snap = snapshot(window.__header__.headerState);
            setCount(snap.count)
        })

        return ()=>{
            unsubscribe()
        }
    }, [])

    function setHeaderCount(newCount){
        window.__header__.headerState.count = newCount;
    }
    return [count, setHeaderCount]
}