import st from '~/Assets/scss/index.scss';
import classNames from 'classnames/bind';

function globalstyle(classname) {
    const cx = classNames.bind(st);
    return cx(classname);
};

export default globalstyle;