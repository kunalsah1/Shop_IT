const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const bcrypt = require('bcrypt')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = config.get('mongoURI')

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo connected"))
    .catch(err => console.log(err))





app.post('/signup', async (req, res) => {
    const { userName, email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ userName, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' })
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(401).json({ error: 'password not matched' })
        }

        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1d' })
        res.json({ token })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})







app.listen(5000, () => {
    console.log('check port 5000')
})