import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);
    console.log('render')
    //Trường hợp 1: useEffect 1 tham số
    useEffect(() => {
        //userEffect chạy lần đầu tiền và mỗi khi state thay đổi
        console.log('UseEffect run')
        //không setState tại đây(nếu mun phái sétState phải có if)

        //Giong lifeCycle componentDidMount +ComponentDidupdate
    })
    useEffect(() => {
        //UseEffect dùng cho các api dạng getDetail (component diduptate)
        console.log('UseEffect dep')

    }, [number])


    useEffect(() => {

        //UseEffect Tương tự componentdidMount => thường dùng cho api getAll
        console.log('UseEffect dep:[]')

    }, []);
    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1)
            }}>+</button>
            <h3>Like: {like}</h3>
            <button className='btn btn-dark' onClick={() => {
                setLike(like + 1)
            }}>+</button>
        </div>
    )
}

export default UseEffectDemo