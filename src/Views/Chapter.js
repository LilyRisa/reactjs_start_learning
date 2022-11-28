import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import {env} from '~/Config'
import Axios from 'axios'

function Chapter({chap, chapid}) {
    const [status, setStatus] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        setStatus(JSON.stringify(chap));
    }, [status, chapid]);

    console.log(chap, chapid);

    return ( 
        <>
        <div className='fs-18 back bg-grey3 position-fixed p-3' onClick={() => navigate(-1)}>
            <span className='fs-24 me-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16"><path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/></svg></span>
             Go Back</div>
        <div className='d-flex justify-content-center'>
            {chap.map((item, index) => {
                if(item.id == chapid){
                    return <div key={index} dangerouslySetInnerHTML={{__html: item.content}}></div>
                }
            })}
        </div>
        
        </>
     );
}

export default Chapter;