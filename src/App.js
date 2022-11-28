import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {web} from '~/Route';
import {getCookie} from '~/Services'
import Layout from './Views/Layout';
import {Header} from '~/Components/header'

function App() {
    return ( 
        <>
          <Header active={` `} />
            <Routes>
                {web.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={ <Layout><route.component /></Layout> }>

                        </Route>
                    )
                })}
            </Routes>
        </>
        
    );
}

export default App;