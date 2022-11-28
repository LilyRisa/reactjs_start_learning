

import {globalstyle} from '~/Services'
import {useParams} from 'react-router-dom';

function Category() {

    let {url, id} = useParams();
    return ( 
        <>
        <div className={globalstyle('container my-2')}>
            {url}
        </div>
        </>
     );
}

export default Category;