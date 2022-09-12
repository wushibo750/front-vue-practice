import requests from "./request";
export const userList=()=>{
    return requests({
        url:'/api/users',
        method:'get'
    })
}
