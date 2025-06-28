
const express = require("express")
const ytdl = require("ytdl-core")
const cors = require('cors');

const app = express()
app.use(cors())

app.get('/download', async(req, res) => {
    
})