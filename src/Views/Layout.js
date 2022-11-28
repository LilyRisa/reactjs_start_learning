import React from 'react'
import {useParams} from 'react-router-dom';

function Layout(props) {
   

    return ( 
        <React.Fragment>
            {props.children}
        </React.Fragment>
     );
}

export default Layout;
