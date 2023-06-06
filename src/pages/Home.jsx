import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [arrProduct, setArrProduct] = useState([]);
    const getProductApi = async () => {
        const res = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ api về thì đưa vào state
        setArrProduct(res.data.content);
    }
    useEffect(() => {
        //Chạy sau khi componet render (tương tự component did mount chi chạy 1 lần duy nhất sau khi render)
        getProductApi();
        console.log('arrProduct', arrProduct);
    }, [])

    return (
        <div className='container'>
            <button className='' onClick={() => {
                getProductApi();
            }}>Get API</button>
            <h3>Shoes Shope</h3>
            <div className="row">
                {arrProduct.map((item) => {
                    return <div className="col-4">
                        <div className="card">
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <NavLink className="btn btn-dark" to={`/detail/${item.id}`}>View Detail</NavLink>
                            </div>

                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Home