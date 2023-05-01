import React from 'react'
import { useHeaderState } from '../hooks/useHeaderState'

console.log('Header')

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

export const Header = () => {
    return (
        <div style={{border: '1px solid red'}}>
            <h1>Header Component</h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Section sectionName="Section One" color="green"/>
                <Section sectionName="Section Two" color="blue"/>
            </div>
        </div>
    )
}
