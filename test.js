describe("Login", () => {
  it("should login with failure", async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      args: ["--start-maximized"],
    });
    const page = await browser.newPage();
    const params = "/user/login";
    await page.goto(`${BASE_URL}${params}`);
    console.log("Page Loaded：", `${BASE_URL}${params}`);
    // await page.screenshot({
    path: "screenshot.png";
  });
  const username = await page.$x(XPATH_USERNAME);
  // console.log('elements：', elements);
  await username?.[0]?.type("mockuser");
  const password = await page.$x(XPATH_PASSWORD);
  await password?.[0].type("wrong_password");
  const btn = await page.$x(XPATH_BUTTON_LOGIN);
  await btn?.[0].click();
  // should display error
  await page.waitForSelector(".ant-alert-error");
  await page.waitFor(TIME_WAIT);
  await page.close();
  browser.close();
});
