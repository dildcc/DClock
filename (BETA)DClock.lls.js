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
// 此版为BETA测试版

// ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//LiteLoaderScript Dev Helper
/// <reference path="C:/Users/douyi/Documents/Library/JS/Api.js" /> 

// ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



//插件注册
let PLUGIN_NAME = "DClock";      //插件名称
let PLUGIN_DESCRIPTION = "DClock 给钟插件 [未授权禁止转载]";     //插件描述
let VERSION = [1,2,2];      //插件版本号
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


// NBT弄不掉的钟

let nbtclock = NBT.parseSNBT(String.raw`{"Count":1b,"Damage":0s,"Name":"minecraft:clock","WasPickedUp":0b,"tag":{"minecraft:item_lock":2b,"minecraft:keep_on_death":1b}}`);

// 进服提示
mc.listen("onJoin",function(pl){
    pl.tell("§6欢迎进入服务器§b请输入/DClock给钟§d")
})  

const PLUGINS_DIR  = "./plugins/LiteSweeper";//文件夹
let playerdata_path = "./plugins/DClock/playerdata.json" //配置文件
let playerdata = data.openConfig(playerdata_path, "json", "{}")


mc.regPlayerCmd("dclock", "§b给§a一§c个§d钟", function (pl, id) { //注册玩家指令
    playerdata.reload() //重载配置文件
    var player = playerdata.get(pl.realName) //读取配置文件
    if (player == null){
        playerdata.set(pl.realName,1)
        pl.giveItem(mc.newItem(nbtclock))
        pl.tell("§6[DClock]§b给钟§d完成")
    } else {
        pl.tell("§6[DClock]§b你已经获取了钟,§d无法重新获取")
    }
})
