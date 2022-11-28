import {globalstyle} from '~/Services'
import {env} from '~/Config'
import Button from './Button';
import React, { useState, useEffect } from 'react';

function CardButton(props) {
    const [loaded, setLoaded] = useState(false);
    return ( 
        <>
        <div className={globalstyle('card-story p-3 border-none hover-zoom')}>
            <div className={globalstyle('mb-1 position-relative')}>
                <Button to={`/truyen/${props.slug}-c${props.id}`}>
                    <img onLoad={() => setLoaded(true)} src={env('URL_FE') + props.thumbnail} className={globalstyle('thumb')} />
                    <div className={globalstyle('mb-1 position-absolute background-masker animated-background ' + (loaded? 'd-none': 'd-block'))}>
                        <div className="background-masker btn-divide-left"></div>
                    </div>
                </Button>
            </div>
            <h2 className={globalstyle('fs-18 my-3')}><Button to={`/truyen/${props.slug}-c${props.id}`}>{props.title}</Button></h2>
            <p className={globalstyle('fs-14')} dangerouslySetInnerHTML={{__html: props.content.substring(0,100)+'...'}}></p>
        </div>
        </>
     );
}

export default CardButton;