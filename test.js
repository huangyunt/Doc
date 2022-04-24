const inspirecloud = require("@byteinspire/inspirecloud-api");
export const screenshot = async (token) => {
  const URLTable = inspirecloud.db.table("url");
  const thumbTable = inspirecloud.db.table("thumb");
  const URL = await URLTable.where({ token }).findOne();
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.setViewport({ width: 600, height: 800 });
  const imgBuffer = await page.screenshot();
  // 截图调用文件上传接口转为 url 形式
  const { imgUrl } = await inspirecloud.file.upload(
    "screenshot", // 文件名
    imgBuffer // 文件内容
  );
  // 存入数据库
  const thumbItem = thumbTable.create({ token, url: imgUrl });
  await thumbTable.save(thumbItem);
  await browser.close();
};

// client.js

const WebSocket = require("ws");
const url = "ws://localhost:8080";
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.send("Message From Client");
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = (e) => {
  console.log(e.data);
};
