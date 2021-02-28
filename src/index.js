const express = require('express')
const morgan = require('morgan')
const userRouter = require('./user/router.js')

const port = 3000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/users', userRouter)

app.listen(port, () => console.log(`Server listening at port ${port}...`))
