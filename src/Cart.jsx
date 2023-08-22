import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, remove, decrease, increase } from './store/CartSlice'


const Cart = () => {
    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(remove(id))
    }

    const ClearItems = () => {
        dispatch(clearCart())
    }
    const increaseItems = (id) => {
        dispatch(increase(id))
    }
    const decreaseItems = (id) => {
        dispatch(decrease(id))
    }

    document.title = `Cart - Shop It`

    const addedItems = useSelector(state => state.cart)


    if (addedItems.length === 0) {
        return (
            <div className='cart'>
                <h1>Your Cart</h1>
                <p style={{ color: 'gray', textAlign: 'center', fontSize: '2rem' }}>is Empty</p>
            </div>
        )

    }
    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            <div className='custom-cart row'>
                {addedItems.map((items, index) => {
                    return (
                        <div className=" mx-4 my-4 col-md-2" key={index}>
                            <div className="card h-100" style={{ width: '18rem', borderRadius: '10px' }}>
                                <img src={items.image} className="card-img-top" style={{ height: '190px', borderRadius: '10px' }} alt={items.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.description.slice(0, 50)}...</p>
                                    <p className="card-text">Price: ₹{items.price}</p>
                                    <div className="chev">
                                        <p className="card-text">Qty: {items.quantity}</p>
                                        <button className='btn qty-btn' onClick={() => increaseItems(items.id)}>+</button>
                                        <button className='btn qty-btn' disabled={items.quantity <= 1} onClick={() => decreaseItems(items.id)}>-</button>
                                    </div>


                                    <button className="btn btn-danger" onClick={() => removeItem(items.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className='clear-cart' onClick={() => ClearItems()}>Clear cart</button>


        </div>
    )
}

export default Cart
