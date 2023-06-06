import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParamDemo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]);
    const keywordRef = useRef('');
    //lấy keyword ra url
    let keyword = searchParams.get('keyword');//nếu url không có keyword thì trả null

    const getProductByKeyWord = async () => {
        console.log(keyword)
        let result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method: 'GET'
        });
        setArrProduct(result.data.content)
    }
    useEffect(() => {
        if (keyword != null) {
            //gọi api khi word khác null
            getProductByKeyWord()
        }
    }, [keyword]);
    const handleChange = (e) => {
        let { value } = e.target;
        keywordRef.current = value;


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('keyword', keywordRef.current)
        setSearchParams({
            keyword: keywordRef.current
        })
    }
    return (
        <div className='container'>
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <input className='form-control' id='txtTuKhoa' onChange={handleChange} />
                    <button type="submit" className="btn btn-outline-primary">Search</button>

                </div>
                <div className="mt-2">
                    <h3>Search result</h3>
                    <div className="row">
                        {arrProduct.map((item) => {
                            return <div className="col-3" key={item.id}>
                                <div className="card">
                                    <img src={item.image} alt="..." />
                                    <div className="card-body">
                                        <h3>{item.name}</h3>
                                        <p>{item.price}</p>
                                        <NavLink to={`/detail/1`} className='btn btn-dark'>View Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
            </form>
        </div>
    )
}

export default UseSearchParamDemo