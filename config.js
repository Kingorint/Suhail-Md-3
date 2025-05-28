const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237670123349";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_14_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcwLFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFlKUStZaU9kaXZPSnl0MG13ZmV2aFViTmR5R0xDNnJwSkdTOEdyMkZ4Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTQ1ODA5NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBFRUY4OTQ4QTJDMDcyRjJEQjg3MkUzQjNCQ0JBREQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODM4NzY0NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1NDU4MDk0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDYyMTU3MzdENzM2RkI4NDNCRTY3MjczOTQ1RDRGMEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4Mzg3NjQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjU0NTgwOTQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQjZBMDVDOUZEMDcwMEFGQjM2Qjc2QjlFRTkzODk4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDgzODc2NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNkFXb1VBM1ZTVUN0YnNkM1RtTURnUVwiLFxuICBcInBob25lSWRcIjogXCI4OGYzMWViMi0wZmFmLTRlYmMtODc1MS0wMzk5N2RlNjU5ZmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAxOTAsXG4gICAgICA3OSxcbiAgICAgIDYyLFxuICAgICAgODIsXG4gICAgICAxMDAsXG4gICAgICA3LFxuICAgICAgMjI4LFxuICAgICAgODksXG4gICAgICA4NCxcbiAgICAgIDk5LFxuICAgICAgMTgyLFxuICAgICAgNTIsXG4gICAgICAyNDQsXG4gICAgICA5MSxcbiAgICAgIDI5LFxuICAgICAgMTc0LFxuICAgICAgNzksXG4gICAgICAyNTIsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMjUzLFxuICAgICAgMTEyLFxuICAgICAgMjcsXG4gICAgICA3MSxcbiAgICAgIDIyMixcbiAgICAgIDI1MCxcbiAgICAgIDE0OCxcbiAgICAgIDI0MCxcbiAgICAgIDIzLFxuICAgICAgMjUwLFxuICAgICAgMjExLFxuICAgICAgMzUsXG4gICAgICAzNyxcbiAgICAgIDIxOSxcbiAgICAgIDEwMCxcbiAgICAgIDMwLFxuICAgICAgMTYsXG4gICAgICAxODgsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaXhrQ0lRdG83WndRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi8vNE93MVFkNmt4U0xsQVpPVEI1SFNXUXNaK1BMM21qMDBEZlBCbGJoQWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaitDSVpNeGdnTE1RYmc5Uk5rdGhMU3A4UGpLeVZYLzVVRzlYYVF4a0pJbGp3WFhpSy9nSDZ5QW81bzQ3S0JrL3phN3hiZlhNQUNkQVd5UDdrRjluQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2FqRy9SRmcwd2tXMjZXYWNvNHE5MnhpUFlXelB4UE5CekxZWUdlakFFR3hhMFQrWTJRdTFOYUUxQmtCckpkTnZycngzdkJrdlFnMmYyeEFIQzZYQkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTQ1ODA5NDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM5MTQ0Mjk5MTU1NTUzOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGl2aW5nIFN0b25lXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTQ1ODA5NDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4Mzg3NjQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnY1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOdjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRWUR0Um5QNFl3dDgrd0MvRkI0T0V6eUV5TTRhNjJZVDNJSVhXeFozWEhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNTcxNjcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDgzODc2NDMzMDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
