"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Full TypeScript support for both puppeteer and the DOM
exports.default = async ({ page }) => {
    // Full puppeteer API is available
    await page.goto('https://www.amazon.com/s?crid=36QNR0DBY6M7J&k=shelves&ref=glow_cls&refresh=1&sprefix=s%2Caps%2C309/');
    /*
           const shelves = [];
  
   $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
             const shelf = $(el)
             const title = shelf.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
  
             shelves.push(title)
         });
  
  
  */
    const topLinks = await page.evaluate(() => {
        const results = document.querySelectorAll('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20');
        return [...results].map(el => [el.querySelector('span.a-size-base-plus.a-color-base.a-text-normal').textContent]);
    });
    
    // Can pause by injecting a "debugger;" statement
    console.log(JSON.stringify(topLinks));
};
