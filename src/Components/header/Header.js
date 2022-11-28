import {globalstyle, parseurl} from '~/Services'
import {env} from '~/Config'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { memo } from 'react';
import {Button} from '~/Components/button'

function Header({active}) {
    const [menu, setMenu] = useState([]);
    let endpoint = env('URL_API') + '/menu';


    useEffect(() => {
       
        let mounted = true;
        (async () => {
            let {data} = await Axios.get(endpoint);
            if(data !== null){
                data = data.filter((item, index) => {
                    if(item.name == 'Main mobile') return item;
                });
                data = JSON.parse(data[0].data);
                if(mounted){
                    console.log('callback header');
                    data = data.map((v, i) => {
                        if(v.name != 'Trang chủ'){
                            v.url = parseurl(v.url);
                            if(typeof v.children !== 'undefined'){
                                v.children = v.children.map((j,k)=>{
                                    return j.url = parseurl(j.url);
                                });
                            }
                            return v;
                        }
                        
                    });
                    data = data.filter(item => item);
                    setMenu(data)
                };
            }
        })();
        return () => mounted = false;
    }, [])
    return ( 
        <>
        <div className={globalstyle('container-fluid header')}>
            <div className={globalstyle('d-none d-lg-block')}>
                <div className={globalstyle('container d-flex')}>
                    <div className={globalstyle('ms-auto d-flex')}>
                    <div className={active == '/' ? globalstyle('mx-3 my-2 px-2 py-3 menu-item active') : globalstyle('mx-3 my-2 px-2 py-3 menu-item')}>
                        <Button to={'/'} className={globalstyle('text-decoration-none fw-bold text-red2')}>Trang chủ</Button>
                    </div>
                        {menu.map((item, i) => {
                            return (<div className={active == item.url ? globalstyle('mx-3 my-2 px-2 py-3 menu-item active') : globalstyle('mx-3 my-2 px-2 py-3 menu-item')} key={i}><Button to={item.url} className={globalstyle('text-decoration-none fw-bold text-red2')}>{item.name}</Button></div>)
                        })}
                    </div>
                    <div className={globalstyle('ms-2')}>

                    </div>
                </div>
            </div>
            {/* {menu.length === 0 && } */}
            
        </div>
        </>
     );
}

export default memo(Header);