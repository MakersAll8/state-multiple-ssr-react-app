import React, { useState } from 'react'
import { HeaderSDK } from './HeaderSDK';

export const Home = ({name}) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <HeaderSDK/>
            <h1>Hello, {name}</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <p>Click increase to make sure count increases, so that we know React has hydrated</p>

            <a href="/app1/client-side-routing">Client Side Routing</a>
        </>
    )
}
