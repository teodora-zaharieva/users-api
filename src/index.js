const express = require('express')
const morgan = require('morgan')
const validator = require('./validator')
const userRouter = require('./user/router')
const { signIn } = require('./auth')

const port = 3000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/users', userRouter)
app.post('/api/session', validator.signIn, signIn)
app.use('*', (_, res) => {
  res.status(404).json({ error: 'Not found!' })
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))
