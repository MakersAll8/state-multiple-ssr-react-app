import React, { useState } from 'react'

export const Header = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{border: '1px solid red'}}>
            <h1>Header Component</h1>
            <p>Header count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increase</button>
        </div>
    )
}
