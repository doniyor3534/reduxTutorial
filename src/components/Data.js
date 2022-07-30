// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Add, Del, Edit } from '../redux/action';

// const Data = () => {
//     const { data } = useSelector((state) => state.todoReducers)
//     const dispatch = useDispatch()
//     const [result, setResult] = useState(true)
//     const [input, setInput] = useState({
//         id: null,
//         name: '',
//         email: ''
//     })
//     const onSub = (e) => {
//         e.preventDefault()
//         if (result) {
//             dispatch(Add({ ...input, id: new Date().getTime() }))
//         } else {
//             dispatch(Edit(input))
//             setResult(true)
//         }
//         setInput({
//             id: null,
//             name: '',
//             email: ''
//         })
//     }
//     const editFun = (val) => {
//         setInput({
//             id: val.id,
//             name: val.name,
//             email: val.email
//         })
//         setResult(false)
//     }
//     const delFun = (id) => {
//         dispatch(Del(id))
//     }
//     const inputFun = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }
//     return (
//         <>
//             <h1>Hello redux</h1>
//             <form onSubmit={onSub}>
//                 <input type="text" name='name' placeholder='name' onChange={inputFun} value={input.name} />
//                 <input type="email" name='email' placeholder='email' onChange={inputFun} value={input.email} />
//                 <button type='submit'>Submit</button>
//             </form>
//             <div className="cards">
//                 {
//                     data.map((val) => (
//                         <div className="card" key={val.id}>
//                             <h1>{val.name}</h1>
//                             <h2>{val.email}</h2>
//                             <button onClick={() => delFun(val.id)}>del</button>
//                             <button onClick={() => editFun(val)}>edit</button>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     );
// };

// export default Data;