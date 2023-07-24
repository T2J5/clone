const puppeteer = require('puppeteer');

(async () => {
  const testPath = `file://${__dirname}/index.html`;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(testPath);

  // 截图保存
  const pngPath = `${__dirname}/browser.png`;
  await page.screenshot({ path: pngPath, fullPage: true });

  /** --- 占位符 --- */
  await page.waitFor('.suite');
  // pass
  const passNode = await page.$$('.pass');
  // fail
  const failNode = await page.$$('.fail');
  if (passNode && passNode.length) {
    console.log(`[browser] 通过 ${passNode.length} 项`);
  }

  if (failNode && failNode.length) {
    console.log(`失败 ${failNode.length} 项`);
    await browser.close();
    process.exit(1);
  }

  console.log(`[browser] 测试用例全部通过浏览器测试 🎉`);

  await browser.close();
})();
