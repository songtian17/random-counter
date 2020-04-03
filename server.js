const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const host = 'localhost'
const port = 4000

let count = 0
let maxCount = 50

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/count', (req, res) => {
    const change = getRandomInt(-3, 3)
    count += change
    if (count < 0) {
        count = 0
    }
    res.send({count})
})

app.get('/maxcount', (req, res) => {
    res.send({maxCount})
})

app.listen(port, host, () => {
    console.log(`Express server listening on ${host}:${port}!`)
})