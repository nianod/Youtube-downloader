// test.js
const { ytdl } = require('./ytdl');

const test = async () => {
    try {
        const query = "https://youtu.be/gyrjTLvFJyM?feature=shared"; // Replace with your video URL
        const result = await ytdl(query);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

test();

// ytdl.js
async function ytdl(url, format) {
    // Validate format
    if (format && !['mp3', 'mp4'].includes(format)) {
        return {
            status: false,
            message: "Invalid format. Only 'mp3' or 'mp4' are supported"
        };
    }

    try {
        // Fetch video metadata
        const ytsResponse = await axios.get(`https://api.allorigins.win/raw?url=https://yts.giftedtech.web.id/?q=${encodeURIComponent(url)}`);
        const videoData = ytsResponse.data.videos[0];

        if (!videoData) {
            return {
                status: false,
                message: "No video data found"
            };
        }

        const { thumbnail: thumbnailUrl, duration, name: title, id } = videoData;

        // Prepare headers
        const headers = {
            'Accept': 'application/json, text/plain, */*'
            // Add other headers as needed
        };

        // Continue with download logic...
        // You would add the actual download implementation here

        return {
            status: true,
            data: {
                title,
                duration,
                thumbnailUrl,
                id
                // Add download URLs or other relevant data
            }
        };
    } catch (error) {
        return {
            status: false,
            message: error.message
        };
    }
}

module.exports = { ytdl };