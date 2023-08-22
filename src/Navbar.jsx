import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/bag.png'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const cartItems = useSelector(state => state.cart)
    document.title = `Shop It`
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
                <Link to='/bag'><img src={img1} className='img-cart' alt="" /></Link>
                <p>{cartItems.length}</p>
                <div className="container-fluid">
                    <Link className="navbar-brand " style={{ color: 'white' }} to="/home"><strong>Shop It</strong></Link>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home" style={{ color: 'white' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/electronics">Electronics</Link></li>
                                    <li><Link className="dropdown-item" to="/jewelery">Jewelery</Link></li>
                                    <li><Link className="dropdown-item" to="/men's clothing">Men's Clothing</Link></li>
                                    <li><Link className="dropdown-item" to="/women's clothing">Women's clothing"
                                    </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
