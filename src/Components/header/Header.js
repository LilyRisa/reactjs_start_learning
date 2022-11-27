import {globalstyle, parseurl} from '~/Services'
import {env} from '~/Config'
import React, { useState, useLayoutEffect } from 'react';
import Axios from 'axios';
import {Button} from '~/Components/button'

function Header({active}) {
    const [menu, setMenu] = useState([]);
    let endpoint = env('URL_API') + '/menu';


    useLayoutEffect(() => {
        let mounted = true;
        (async () => {
            let {data} = await Axios.get(endpoint);
            if(data !== null){
                data = data.filter((item, index) => {
                    if(item.name == 'Main mobile') return item;
                });
                data = JSON.parse(data[0].data);
                if(mounted){
                    data = data.map((v, i) => {
                        v.url = parseurl(v.url);
                        if(typeof v.children !== 'undefined'){
                            v.children = v.children.map((j,k)=>{
                                return j.url = parseurl(j.url);
                            });
                        }
                        return v;
                    });
                    setMenu(data)
                };
            }
        })();
        return () => mounted = false;
    }, [])
    return ( 
        <div className={globalstyle('container-fluid header')}>
            <div className={globalstyle('d-none d-lg-block')}>
                <div className={globalstyle('container d-flex')}>
                    <div className={globalstyle('ms-auto d-flex')}>
                        {menu.map((item, i) => {
                            return (<div className={active == item.url ? globalstyle('mx-3 my-2 px-2 py-3 menu-item active') : globalstyle('mx-3 my-2 px-2 py-3 menu-item')} key={i}><Button to={item.url} className={globalstyle('text-decoration-none fw-bold text-red2')}>{item.name}</Button></div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Header;