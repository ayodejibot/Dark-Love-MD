//#ENJOY
/**

██████╗  █████╗ ██████╗ ██╗  ██╗     ██╗      ██████╗ ██╗   ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝     ██║     ██╔═══██╗██║   ██║██╔════╝
██║  ██║███████║██████╔╝█████╔╝█████╗██║     ██║   ██║██║   ██║█████╗  
██║  ██║██╔══██║██╔══██╗██╔═██╗╚════╝██║     ██║   ██║╚██╗ ██╔╝██╔══╝  
██████╔╝██║  ██║██║  ██║██║  ██╗     ███████╗╚██████╔╝ ╚████╔╝ ███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝
                                                                       

                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ayodejifamily299@gmail.com";
global.location = "Lagos,Awoyaya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2348122441244@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github = process.env.GITHUB || "https://github.com/ayodejibot/Dark-Love-MD.git";
global.gurl = process.env.GURL || "https://whatsapp.com/L6dT7pVhXYG9hvh3aneai2";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "2348122441244";
global.sudo = process.env.SUDO || "2348122441244,255714595078";
global.owner = process.env.OWNER_NUMBER || "2348122441244";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "255714595078";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";
global.anti_delete = process.env.Anti_Delete || "true";

global.api_smd = "https://github.com/ayodejibot/SESSION-GENERATOR.Onrender.git";
global.scan = ""

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhQb05ZazJHQkszVXVIOVdINWl3SHp3Y2pyOHN2UENOMlFhOHBvVU8wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFZBZjdTYlpvcmNlMTQ4ZFBhOGd3VURJSDVKMFpjTFhEVU5LS1FqbWhYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0S3BHdk9zMGhxc1BtcHBTTlUyNGxGTll6Z21FNE9hdEdYbElUSS9ibUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0S0hnZlkvSy8vRGE3alllMFZMMzBQcU1ZNHA2aEJoWk5IMkJvTjVucVNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPeThIcFZ5YXpoL3lBdVBmdUJ3c2ViOVBKMmpHVGE1TlExUDJlS0x6VVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZET2ZId0xYb2pqTjVNb3dtNXNYNHZvbzJJZXhtSnRUSSt4dVlZT2pSV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpJK1M4WDhEMitlRk5tUjdMNHJiMGdQTjVvdG9GY1UzUWZVbHFTaVgzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWNXZUdySFRjbnd1eDJ6L3J1WW5VRnhCMnRRK3lrVFVHY2pqamcxZFNncz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFQRGxHQTg4VXdsa1ZOSDBqTUpYMkdQN1duNm1teXR0QmFTeHN0akJ0clB0L1FDVEg0Lzl5Q1Zob3BkMEFVbnNhUlBITTJQQURYSnJJRm16MDV6U2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlJoQXo4QnI0OG92SjIwalc3V2xQYUtrTyt3aWIwODhHWWxscnZjbjlxRFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjllUy1Wa0tnUWFHMjJVYmZjeUg5WHciLCJwaG9uZUlkIjoiYmQ5MWUwNjUtNWIzYi00Y2YzLTkzNDQtMGU4ZTdlYzNjNzA5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBCdjM2Q3JTcmQwbDc2RENnaGpWSU9KckY2UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVDYzamd2YnUrbHZMQkkyaTNKenIvejdWSTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEJHNFlMRUUiLCJtZSI6eyJpZCI6IjIzNDgxMjI0NDEyNDQ6MzlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ051cTZqa1E4dXFadGdZWUJTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhkVjJhU1RrVm1Sd1FUazhhbmxCVEJZbTlpajNjeVVVZCtiVFZrRkhmWEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ill0Vk04TVczT3Bjc2JkNkExSmVlcWJ6eEpwcy8rdDI4WlQyR2htbDdVRXcva1ZPa0Mvd3R0U1VSQUVKdjJFMGdFZlhuQXNBMjYySzROMWEwY1orNkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOcHdmK0MwbjVBVmRjaWM4aVNLUjRxZjNiRjVld1R4dFNZbmM3RlhIUDZIOVdEUmNLcWZpZ2w0cmNVLzg4dW9oSkYzZkxuckF0aGVvMEFOU0ZCSnVoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjI0NDEyNDQ6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1hWZG1razVGWmtjRUU1UEdwNVFVd1dKdllvOTNNbEZIZm0wMVpCUjMxeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDI4MjIzOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQSmcifQ=="
  "Put your session id here 😀"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-DARK-LOVE-𝐌𝐃-𝐕1😈",
  author: process.env.PACK_AUTHER || "DARK",
  packname: process.env.PACK_NAME || "👾",
  botname: process.env.BOT_NAME || "DARK-LOVE-𝐌𝐃-𝐕1",
  ownername: process.env.OWNER_NAME || "AYODEJI",
  errorChat: process.env.ERROR_CHAT || "2348122441244",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
