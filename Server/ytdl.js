
const express = require("express")
const ytdl = require("ytdl-core")
const cors = require('cors')
const PORT = 3000;

const app = express()
app.use(cors())

app.get('/download', async(req, res) => {
    try {
    const videoURL = req.query.url
    if(!ytdl.validateURL(videoURL)) return res.status(400).send('Invalid Url')

        const info = await ytdl.getInfo(videoURL)
        const format = ytdl.chooseFormat(info.formats, { quality: "highestvideo"})

    res.header('content-Deposition', `attachmment; filename = "video.mp4"`)
    ytdl(videoURL, { format }).pipe(res)
} catch(err) {
    console.log("error occured", err)
}
})

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`)
})