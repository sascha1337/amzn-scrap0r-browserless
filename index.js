const { default: start } = require('./start.js');
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://crawl.grindtology.com:3000/'
  });
  const page = await browser.newPage();

  await start({ page, browser });

  return browser.close();
})()
.then(() => console.log('Script complete!'))
.catch((err) => console.error('Error running script' + err));