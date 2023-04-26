import React, { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { Contact } from './Contact';
import { About } from './About';


export const ClientSideRouting = () => {
    const [count, setCount] = useState(0);

    return (<>
        <div>ClientSideRouting Page</div>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <p>Click increase to make sure count increases, so that we know React has hydrated</p>
        <h1>Client Side Pages</h1>
        <ul>
            {['About', 'Contact'].map((page) => (
            <li key={page}>
                <Link to={`/app1/client-side-routing/${page.toLowerCase()}`}>{page}</Link>
            </li>
            ))}
        </ul>

        <a href="/app1">Back to server side routing</a>

        <Routes>
            <Route path='/app1/client-side-routing/about' element={<About />} />
            <Route path='/app1/client-side-routing/contact' element={<Contact />} />
        </Routes>

    </>)
}
