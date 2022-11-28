import {Header} from '~/Components/header'
import {Loadingbar} from '~/Components/loading'
import React, { useState, useEffect } from 'react';

function Story() {
    const [animation, setAnimation] = useState('30');

    useEffect(() => {
        setAnimation('100')
    }, [])

    return ( 
        <>
            <Loadingbar animation={animation} />

        </>
        
     );
}

export default Story;