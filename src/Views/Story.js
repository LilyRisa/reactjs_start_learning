import {Loadingbar} from '~/Components/loading'
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {env} from '~/Config'
import Axios from 'axios'
import {Button} from '~/Components/button'
import Chapter from './Chapter';

function Story() {
    const [animation, setAnimation] = useState('30');
    const [story, setStory] = useState(null);
    const [chapter, setChapter] = useState([]);

    let {url, id, cid} = useParams();
    let endpoint = env('URL_API') + '/story/'+ id;
    let endpoint_chapter = env('URL_API') + '/chapter/'+ id;

    const load_data = async () => {
        let {data} = await Axios.get(endpoint);
        let {data : data_chapter} = await Axios.get(endpoint_chapter);
        
        return {data,data_chapter};
    }

    useEffect(() => {
        setAnimation('100');
    }, [])

    useEffect(() => {
        load_data().then(item => {
            setStory(item.data);
            setChapter(item.data_chapter);
        });
    }, [])

    console.log(story);

    return ( 
        <>
            <Loadingbar animation={animation} />
            {story !== null ? 
                <>
                    <div className='position-relative gallery' style={{backgroundImage: `url("${env('URL_FE')+story.thumbnail}")`}}>
                        <div className='position-absolute profile d-flex flex-wrap pb-3'>
                            <img src={env('URL_FE')+story.thumbnail} className='story-circle me-2'></img>
                            <div className='mx-3 d-flex align-items-center'>
                                <div>
                                    <h2 className='fs-18 text-white d-block'>{story.title}</h2>
                                    <p className='fst-italic text-white w-100' dangerouslySetInnerHTML={{__html: story.content.substring(0,200)+'...'}}></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {typeof cid === 'undefined' ? 
                        <div className='container my-3 p-2 border'>
                            <div className='d-flex flex-wrap'>
                                <span className='fs-16'>Danh sách chương ({chapter.count} chương)</span>
                                
                            </div>
                            <div className='my-3'>
                                    {chapter.data.map((item, index) => {
                                        return <div key={index} className='my-2 p-2 bg-grey2'><Button to={`/truyen/${url}-c${id}/chapter-${item.id}`} >{item.title}</Button></div>
                                    })}
                            </div>
                        </div>
                    :
                    <div className='container my-3 p-2 border'><Chapter chap={chapter.data} chapid={cid}></Chapter></div>
                    }
                </>
                : ''
            }
        </>
        
     );
}

export default Story;