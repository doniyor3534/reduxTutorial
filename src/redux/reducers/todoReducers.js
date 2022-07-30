// import { ActionType } from "../action/Type";

// const initialstate = {
//     data: JSON.parse(localStorage.getItem('data')) || []
// }

// const todoReducers = (state = initialstate, { type, payload }) => {
//     switch (type) {
//         case ActionType.add:
//             localStorage.setItem('data', JSON.stringify([...state.data, payload]))
//             return {
//                 ...state,
//                 data: JSON.parse(localStorage.getItem('data'))
//             }
//         case ActionType.edit:
//             localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? payload : val)))
//             return {
//                 ...state,
//                 data: JSON.parse(localStorage.getItem('data'))
//             }
//         case ActionType.del:
//             localStorage.setItem('data', JSON.stringify(state.data.filter((val) => val.id !== payload)))
//             return {
//                 ...state,
//                 data: JSON.parse(localStorage.getItem('data'))
//             }
//         default: return state
//     }
// }
// export default todoReducers