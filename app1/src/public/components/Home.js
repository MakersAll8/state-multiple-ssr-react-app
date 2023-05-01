import React from 'react'
import { HeaderSDK } from './HeaderSDK';
import {useSnapshot} from 'valtio';
import { headerState } from '../state/headerState';

export const Home = ({name}) => {
    const snap = useSnapshot(headerState);
    return (
        <>
            <HeaderSDK/>
            <h1>Hello, {name}</h1>
            <p>Header count: {snap.count}</p>
            <button onClick={()=>{++headerState.count}}>increase</button>
            <p>Click increase to make sure count increases, so that we know React has hydrated</p>

            <a href="/app1/client-side-routing">Client Side Routing</a>
        </>
    )
}
