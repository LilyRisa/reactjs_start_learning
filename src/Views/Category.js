
import {Header} from '~/Components/header'
import {globalstyle} from '~/Services'
import {useParams} from 'react-router-dom';

function Category() {

    let {url, id} = useParams();
    return ( 
        <>
        <Header active={`/${url}-c${id}`} />
        <div className={globalstyle('container my-2')}>
            {url}
        </div>
        </>
     );
}

export default Category;