const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://id.heroku.com/login');
  
  await page.type('#email', 'your email address')
  await page.type('#password', 'your password')

  await page.click('button.btn.btn-primary.btn-lg.btn-block')

  await page.screenshot({path: 'test.png'});

  await browser.close();
})();