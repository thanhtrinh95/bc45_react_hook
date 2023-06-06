import React, { useState } from 'react'

const UseStateDemo = () => {
    const [number, setNumber] = useState(1);
    const [img, setImg] = useState('https://picsum.photos/200/100');
    const [size, setSize] = useState(10);
    return (
        <div className='container'>
            <h3>Number:{number}</h3>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1)
            }} >+</button>
            <hr />
            <div className="mt-2">
                <h3>Ví dụ : 2</h3>
                <div className="card w-25">
                    <div className="card"><img src={img} alt={'...'} /></div>
                    <button className='btn btn-danger' onClick={() => {
                        let newImg = `https://picsum.photos/${Math.floor(Math.random() * 200)}`;
                        setImg(newImg)
                    }}>Random</button>
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <h3>ví dụ 3:</h3>
                <p style={{ fontSize: size }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae!</p>
                <button className='btn btn-dark' onClick={() => {
                    setSize(size + 2)
                }}>+</button>
                <button className='btn btn-dark' onClick={() => {
                    setSize(size - 2)
                }}>-</button>
            </div>
        </div>
    )
}

export default UseStateDemo