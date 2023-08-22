import React from 'react'

const ProductItems = (props) => {
    const { title, description, img, price, rating, onAddToCart } = props
    return (
        <div className='my-4'>
            <div className="card h-100" style={{ width: '18rem', borderRadius: '10px' }}>

                <img src={img} className="card-img-top" style={{ height: '190px', borderRadius: '11px' }} alt={title} />
                <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{title}...</h6>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">Price: ₹{price}</p>
                    <span className="badge rounded-pill text-bg-danger" style={{ width: '250px', marginBottom: '5px' }}>Rating : {rating}</span>

                    <button className="btn btn-primary mt-auto" onClick={onAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItems
