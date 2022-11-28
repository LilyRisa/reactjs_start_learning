
import {Header} from '~/Components/header'
import {CardButton} from '~/Components/button'
import {globalstyle} from '~/Services'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {env} from '~/Config'
import {Loadingbar} from '~/Components/loading'

function Home() {
    const [story, setStory] = useState([]);
    const [animation, setAnimation] = useState('30');
    let endpoint = env('URL_API') + '/story?limit=10&page=1';


    const load_data = async () => {
        let {data} = await Axios.get(endpoint);
        data = data.data;
        
        
        setStory(data);
    }

    useEffect(() => {
        setAnimation('100')
        load_data();
    }, [])

    return (
        <>
        <Header active={''} />
        <Loadingbar animation={animation} />
        <div className={globalstyle('container my-2')}>
            <div className={globalstyle('d-flex flex-wrap')}>
                {story.map((item, index) => {
                    return <div className={globalstyle('col-4')} key={index}><CardButton {...item}></CardButton></div>
                })}
            </div>
        </div>
        </>
    );
}

export default Home;