import { Link } from 'react-router-dom';

function Button({to, href, outline = false, children, onClick, ...passprops}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops
    };

    if(to){
        props.to = to;
        Comp = Link;
    }else if(href){
        props.href = href;
        Comp = 'a'
    }
    return ( <Comp {...props} >{children}</Comp> );
}

export default Button;