import React from 'react'
import { Link } from 'react-router-dom'
import carousel1 from '../public/carousel1.jpg'
import carousel2 from '../public/carousel2.jpg'
import carousel3 from '../public/carousel3.jpg'

const Home = () => {

    document.title = `Home - Shop It`
    return (
        <>
            <div className='company'>
                <div className='company-name'>
                    <h1 className='text-center'>Shop It</h1>
                    <p className='text-center text-wrap' style={{ width: "55rem" }} >Shop it - Where Style Meets Convenience. Discover a world of fashion, trends, and must-haves, all just a click away. Unleash your shopping desires with ease and indulge in the joy of finding your perfect look.</p>
                    <p className='text-center'>Redefining the Way You Shop Online</p>
                </div>
                <div className="shop-btn">
                    <Link to="/products">Shop Now</Link>
                </div>
            </div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel3} className="d-block w-100 custom-image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100 custom-image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel1} className="d-block w-100 custom-image" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>



            </div >

        </>
    )
}

export default Home
