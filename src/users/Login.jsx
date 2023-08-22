import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    document.title = 'Sign IN - Shop IT'
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser((prevUser) => ({ ...prevUser, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', user)
            .then((res) => {
                const token = res.data.token
                localStorage.setItem('token', token)
                navigate('/home')
            })
            .catch((error) => {
                console.log('Error in login ', error)
            })

    }


    return (
        <div className='signUp'>
            <h1 className='logo'>SHOP IT</h1>

            <h1>Sign IN</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} required />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder='password' name='password' value={user.password} onChange={handleChange} required />
                <button className='signUp-btn'>Login</button>
                <p>New to Shop IT?</p>
                <Link to='/signup' className='signIn-btn'>Sign Up</Link>
            </form>

        </div>
    )
}

export default Login
