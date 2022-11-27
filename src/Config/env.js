
const env = (key, default_value=null)=>{
    key = 'REACT_APP_' + key;
    if(key in process.env){
        return process.env[key];
    }else{
        return default_value;
    }
}

export default env;
