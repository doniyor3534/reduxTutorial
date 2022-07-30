import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Add, Del, Edit } from '../REDUXXX/ACTION/ACTION';

const List = () => {
    const { data } = useSelector((state => state.Reducerfun))
    const dispatch = useDispatch()
    const [result, setResult] = useState(true)
    const [input, setInput] = useState({
        id: null,
        name: '',
        email: ''
    })
    const onsub = (e) => {
        e.preventDefault()
        if (result) {
            dispatch(Add({...input,id:new Date().getTime()}))
        }
        else {
            dispatch(Edit(input))
            setResult(false)
        }
        setInput({
            id: null,
            name: '',
            email: ''
        })
    }
const inputfun = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
}
const edit = (val) => {
    setInput({
        id: val.id,
        name: val.name,
        email: val.email
    })
}
const del = (id) => {
    dispatch(Del(id))
}
return (
    <div>
        <form onSubmit={onsub}>
            <input type="text" name='name' value={input.name} onChange={inputfun} />
            <input type="email" name='email' value={input.email} onChange={inputfun} />
            <button type='submit'>Submit</button>
        </form>
        <div className="cards">
            {
                data.map((val) => (
                    <div className="card" key={val.id} >
                        <h1>{val.name}</h1>
                        <h2>{val.email}</h2>
                        <button onClick={() => edit(val)}>edit</button>
                        <button onClick={() => del(val.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    </div>
);
};

export default List;