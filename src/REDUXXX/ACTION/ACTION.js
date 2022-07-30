import { Type } from "./TYPESS"

export const Add=(val)=>{
    return {
        type:Type.add,
        payload:val
    }
}

export const Edit=(val)=>{
    return{
        type:Type.edit,
        payload:val
    }
}

export const Del=(val)=>{
    return{
        type:Type.del,
        payload:val
    }
}