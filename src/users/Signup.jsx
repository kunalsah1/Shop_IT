import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    document.title = 'Sign Up - Shop IT '
    const [user, setUser] = useState({
        userName: "",
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
        axios.post('http://localhost:5000/signup', user)
            .then(res => navigate('/login'))
            .catch(error => console.log('error in frontend', error))
    }


    return (
        <>


            <div className='signUp'>
                <h1 className='logo'>SHOP IT</h1>

                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">UserName</label>
                    <input type="text" placeholder='UserName' name='userName' value={user.userName} onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' name='password' value={user.password} onChange={handleChange} required />
                    <button className='signUp-btn'>Sign Up</button>
                    <p>Already have an account?</p>
                    <Link to='/' className='signIn-btn'>Sign In</Link>
                </form>

            </div>
        </>
    )
}

export default Signup
