const puppeteer = require('puppeteer');

async function takeScreenshot(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const screenshotPath = `screenshots/screenshot.png`; // Save screenshot in 'screenshots' folder
    await page.screenshot({ path: screenshotPath });
    await browser.close();
    return screenshotPath;
}

module.exports = takeScreenshot;
