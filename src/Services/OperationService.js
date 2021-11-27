import instance from "../Config/axios"


export function getAll(){
    return instance.get("operations/")
}

export function getById(id){
    return instance.get("operations/"+id)
}

export function insert(data){
    return instance.post("operations/",data)
}

export function update(data,id){
    return instance.put("operations/"+id,data)
}

export function del(id){
    return instance.delete("operations/"+id)
}
