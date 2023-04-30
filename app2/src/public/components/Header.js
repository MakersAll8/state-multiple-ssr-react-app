import React, { useEffect, useState } from 'react'
import { useHeaderState } from '../hooks/useHeaderState'
import { subscribe } from 'valtio';
import { headerState } from '../state/headerState';

const Section = ({sectionName, color = 'red'}) => {
    const [count, setCount] = useHeaderState();
    return (
        <div style={{border: `1px solid ${color}`}}>
            <h1>{sectionName}</h1>
            <p>Header count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increase</button>
        </div>
    )
}

const SectionSubscribe = ({ color = 'red'}) => {
    const [localCount, setLocalCount] = useState(0);
    useEffect(()=>{
        const unsubscribe = subscribe(headerState, () => {
            setLocalCount(headerState.count)
        })

        return ()=>{
            unsubscribe();
        }
    }, [])
    return (
        <div style={{border: `1px solid ${color}`}}>
            <h1>Section using vanilla subscribe</h1>
            <p>Header count: {localCount}</p>
            <button onClick={() => ++headerState.count}>increase</button>
        </div>
    )
}

export const Header = () => {
    return (
        <div style={{border: '1px solid red'}}>
            <h1>Header Component</h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Section sectionName="Section One" color="green"/>
                <Section sectionName="Section Two" color="blue"/>
                <SectionSubscribe color="cyan" />
            </div>
        </div>
    )
}
