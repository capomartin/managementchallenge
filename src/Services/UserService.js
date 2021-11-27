import instance from "../Config/axios"


export function getAll(){
    return instance.get("users/")
}

export function login(data){
    return instance.post("users/login/",data)
}

export function insert(data){
    return instance.post("users/",data)
}