const express = require('express');
const takeScreenshot = require('./screenshot'); // Path to your screenshot script

const app = express();
const port = 3000;

// Serve static files from 'screenshots' directory
app.use('/screenshots', express.static('screenshots'));

app.get('/screenshot', async (req, res) => {
    const url = req.query.url; // Get URL from query parameter
    try {
        const screenshotPath = await takeScreenshot(url);
        res.json({ imageUrl: `/screenshots/screenshot.png` }); // Respond with URL of saved image
    } catch (error) {
        console.error('Error capturing screenshot:', error);
        res.status(500).json({ error: 'Failed to capture screenshot' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
