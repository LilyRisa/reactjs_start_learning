import {globalstyle} from '~/Services'
import {env} from '~/Config'
import Button from './Button';

function CardButton(props) {
    return ( 
        <>
        <div className={globalstyle('card-story p-3 border-none hover-zoom')}>
            <div className={globalstyle('mb-1')}>
                <Button to={`/truyen/${props.slug}-c0`}><img src={env('URL_FE') + props.thumbnail} className={globalstyle('thumb')} /></Button>
            </div>
            <h2 className={globalstyle('fs-18 my-3')}><Button to={`/truyen/${props.slug}-c0`}>{props.title}</Button></h2>
            <p className={globalstyle('fs-14')} dangerouslySetInnerHTML={{__html: props.content.substring(0,100)+'...'}}></p>
        </div>
        </>
     );
}

export default CardButton;