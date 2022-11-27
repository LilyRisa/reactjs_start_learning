
function parseurl(url){
    if(url == '#'){
        return url;
    }
    url = url.split('/');
    if(url[url.length - 1] !== ''){
        return '/'+url[url.length - 1];
    }
    return '/';
}

export default parseurl;