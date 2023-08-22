import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './store/CartSlice';

const Category = (props) => {

    const [category, setCategory] = useState([])
    const dispatch = useDispatch()


    const title = (word) => {

        const wordTitle = word[0].toUpperCase() + word.slice(1).toLowerCase()
        return wordTitle
    }

    document.title = `${title(props.Category)} - Shop IT`

    const url = `https://fakestoreapi.com/products/category/${props.Category}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setCategory(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    const onAddToCart = (product) => {
        dispatch(add(product))
    }



    return (

        <div className='custom-cart row'>
            {category.map((items, index) => {
                return (
                    <div className=" mx-4 my-4 col-md-2" key={index}>
                        <div className="card h-100" style={{ width: '18rem', borderRadius: '10px' }}>
                            <img src={items.image} className="card-img-top" style={{ height: '190px', borderRadius: '10px' }} alt={items.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{items.title}</h5>
                                <p className="card-text">{items.description.slice(0, 50)}...</p>
                                <p className="card-text">Price: ₹{items.price}</p>
                                <button className="btn btn-primary mt-auto" onClick={() => onAddToCart(items)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

export default Category
