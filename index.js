const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

//Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10mins
    max: 15
})
app.use(limiter)
app.set('trust proxy', 1)

//set static folder
app.use(express.static('public'))

app.use('/api', require('./routes/index'))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})