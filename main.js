const {app, BrowserWindow} = require('electron');
// 声明我们的greeting 窗体变量
let geetingWin;

// 当app完成初始化时，执行窗体的创建
app.on('ready', createGreetingWindow);

function createGreetingWindow() {
    // 构建一个高600，宽800的窗体，可以认为，一个窗体就是一个游览器的tab选项卡
    greetingWin = new BrowserWindow({width: 800, height: 600});
    // 窗体中显示的内容是index.html文件中的内容，将按照google游览器的渲染方式，渲染显示。
    // __dirname，表示main.js所在的目录路径。
    greetingWin.loadURL(__dirname + "/index.html");
    // 监听窗体关闭事件，当窗体已经关闭时，将win赋值为null，垃圾回收
    greetingWin.on('closed', () => {
        win = null;
    })
}
