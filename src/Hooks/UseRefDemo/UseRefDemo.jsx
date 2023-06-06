import React, { useRef, useState } from 'react'
import Card from './Card'
/*
        +useRef:
        Tương tự useState dùng đẻ lưu lại giá trị sau mỗi lần component render, tuy nhiên khi ref thay đổi thì giao diện
         không phải render lại
         Ngoài ra useRef Còn Dùng đẻ truy xuất đến thẻ khi gắn vào thuộc tính ref của the(JSX Element)
         +useRef và UseState
        useRef dùng để lưu giá trị sau mỗi lần component render tuy nhien không làm cho component khi thay đổi giá trị 
        useState dùng dể lưu lại giá trị sau mỗi lần component render tuy nhiêm sau khi setSatte thì component sẽ render lại


        */


const UseRefDemo = () => {
    // const [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: ''
    // })
    const elementRef = useRef();
    const useLoginRef = useRef({
        username: '',
        password: ''
    })
    console.log('useLoginRef', useLoginRef.current)
    const handleChange = (e) => {
        const { id, value } = e.target;
        useLoginRef.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('useLoginRef', useLoginRef.current)
        elementRef.current.style.color = 'red';

    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <p>Username</p>
                <input className='form-control' id='name' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>Password</p>
                <input className='form-control' id='password' type='password' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-dark my-2'>Login</button>
            </div>
            <div className='w-25'>
                <Card />
            </div>
        </form>
    )
}

export default UseRefDemo