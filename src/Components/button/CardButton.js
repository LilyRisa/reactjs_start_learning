import {globalstyle} from '~/Services'
import {env} from '~/Config'

function CardButton(props) {
    return ( 
        <>
        <div className={globalstyle('card-story p-3')}>
            <div className={globalstyle('mb-1')}>
                <img src={env('URL_FE') + props.thumbnail} className={globalstyle('img-fluid')} />
            </div>
            <h2 className={globalstyle('fs-18')}>{props.title}</h2>
        </div>
        </>
     );
}

export default CardButton;