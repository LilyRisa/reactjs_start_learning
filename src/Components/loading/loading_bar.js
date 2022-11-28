import {globalstyle} from '~/Services'
import React, { useState, useEffect } from 'react';

function Loadingbar({animation}) {
    const [time, setTime] = useState(false);
    let timer1;
    if(animation == '100'){
      timer1 = setTimeout(() => {
          setTime(true)
      }, 4000)
    }
    

    useEffect(
        () => {
          return () => {
            clearTimeout(timer1)
          }
        },
        [time]
      )

    let class_name = 'loading-bar loading-bar-animation-';
    class_name += animation;
    if(time){
        class_name = class_name + ' '+ 'd-none';
    }
    
    return ( 
        <div className={globalstyle(class_name)} style={{width: `${animation}%`}}></div>
     );
}

export default Loadingbar;