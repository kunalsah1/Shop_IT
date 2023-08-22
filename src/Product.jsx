import React, { useEffect, useState } from 'react';
import ProductItems from './ProductItems';
import { useDispatch } from 'react-redux';
import { add } from './store/CartSlice';


const Product = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch()
    document.title = `Products - Shop It`



    const url = `https://fakestoreapi.com/products`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(url);
                const data = await res.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.log("error");
            }
        };
        fetchData();
    }, []);

    const onAddToCart = (product) => {
        dispatch(add(product))
    }


    return (
        <div className='container my-3'>
            <h1 style={{ marginTop: '50px', textAlign: 'center' }}>Products Available</h1>
            <div style={{ textAlign: 'center' }}>
                {isLoading && <h2>Loading...</h2>}
            </div>

            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <ProductItems
                            title={product.title.slice(0, 20)}
                            description={product.description.slice(0, 50)}
                            img={product.image}
                            price={product.price}
                            rating={product.rating.rate}
                            onAddToCart={() => onAddToCart(product)}

                        />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Product;
