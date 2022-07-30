import { Type } from "../ACTION/TYPESS"

export const initialstate={
    data:JSON.parse(localStorage.getItem('data')) || []
}

const Reducerfun=(state=initialstate,{type,payload})=>{
      switch (type){
        case Type.add:
            localStorage.setItem('data',JSON.stringify([...state.data,payload]))
            return{
                ...state,data:JSON.parse(localStorage.getItem('data'))
            }
         case Type.edit:
            localStorage.setItem('data',JSON.stringify(state.data.map(val=>val.id===payload.id?payload:val)))
            return{
                ...state,data:JSON.parse(localStorage.getItem("data"))
            }
        case Type.del:
            localStorage.setItem("data",JSON.stringify(state.data.filter(val=>val.id!==payload)))
            return{
                ...state,data:JSON.parse(localStorage.getItem("data"))
            }
            default: return state
      }
}
export default Reducerfun;