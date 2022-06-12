//   ________         ________________     ________________    
//   |  __   |__      |  _____________|    |  _____________|
//   | |  |__   |     |  |                 |  |        
//   | |     |  |     |  |                 |  |    
//   | |     |  |     |  |                 |  |
//   | |     |  |     |  |                 |  |
//   | |   __|  |     |  |                 |  |
//   | |__|   __|     |  |_____________    |  |_____________
//   |_______|        |________________|   |________________|

// DIL工作室 室长:DCC 制作

// ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//LiteLoaderScript Dev Helper
/// <reference path="c:\Users\douyi\Documents\Library/Library/JS/Api.js" /> 

// ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



//插件注册
let PLUGIN_NAME = "DClock";      //插件名称
let PLUGIN_DESCRIPTION = "DClock 给钟插件 [未授权禁止转载]";     //插件描述
let VERSION = [1,0,0];      //插件版本号
let Publishing_website = "https://minebbs.com";   //插件发布地址
let AUTHOR = "DIL工作室";       //插件作者

//检查 LL 版本
if(!ll.requireVersion(2, 3, 0)){
    throw new Error("\n"+`[注意]${PLUGIN_NAME} 加载失败!`+"\n"+"[注意]LL版本过低,请升级至 LL2.3.0 ");
}
else{
    logger.info(`${PLUGIN_NAME} 加载成功, 版本:${VERSION.join(".")}, 发布:${Publishing_website},作者: ${AUTHOR}`);  //显示插件版本号等信息

    ll.registerPlugin(PLUGIN_NAME, PLUGIN_DESCRIPTION, VERSION, {
        "Publishing website":Publishing_website,
        "发布地址":Publishing_website,
        "Author":AUTHOR,
        "作者":AUTHOR
     
    });
};

load();

// 进服提示
function LoadName(pl) {
    pl.tell('欢迎进入服务器,要钟请输入/DClock,查看帮助请用/DCHelper(暂未制作完成)');
}  

function command(pl, comm) {
    mc.runcmdEx('give "' + pl.realName + '" clock');
    pl.tell('[DClock] 完成！');
    return false;
}

// 注册指令
function load() {
    mc.listen("onJoin", LoadName)
    mc.regPlayerCmd('dclock', '获取一个钟', command, 0) // 给玩家一个钟
}

mc.regPlayerCmd("DCHelper","DClock 帮助",function(pl,args){
    pl.tell("用/DClock来获取钟,BUG反馈去Github,QQ:2829000751") // 输出帮助文字
    pl.tell(args[0])
})

// 制作完成
