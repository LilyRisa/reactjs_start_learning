
import {Header} from '~/Components/header'
import {CardButton} from '~/Components/button'
import {globalstyle} from '~/Services'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {env} from '~/Config'
import {Loadingbar} from '~/Components/loading'

function Home() {
    const [animation, setAnimation] = useState('30');
    const [story, setStory] = useState([]);
    let endpoint = env('URL_API') + '/story?limit=12&page=1';


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
        <Loadingbar animation={animation} />
        <div className={globalstyle('container my-2')}>
            <div className={globalstyle('d-flex flex-wrap justify-content-center')}>
                {story.map((item, index) => {
                    return <div className={globalstyle('col-3 m-2')} key={index}><CardButton {...item}></CardButton></div>
                })}
            </div>
        </div>
        </>
    );
}

export default Home;