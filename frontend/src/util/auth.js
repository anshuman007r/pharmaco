const AUTH_TOKEN = 'formAppToken';

const getToken = () =>{
    console.log('getToken')
    return localStorage.getItem(AUTH_TOKEN)
}

const setToken = (token) =>{
    console.log('setToken')
    localStorage.setItem(AUTH_TOKEN,token)
}

const removeToken = () =>{
    console.log('removeToken')
    localStorage.removeItem(AUTH_TOKEN)
}

export { getToken, setToken, removeToken}