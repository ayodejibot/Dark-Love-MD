//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ayodejiayanfeoluwanimi@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/ayodejibot/Dark-Love-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7d7112d331a345d558149.jpg";
global.devs = "2349071214451";
global.sudo = process.env.SUDO || "2349071214451";
global.owner = process.env.OWNER_NUMBER || "2349071214451";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BEa0JKN0plN0xpS29aQ2dvem54dG4xbzVuMWJpNDNCQWNFSUZWd1htUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEp6YjRDdDJ6ZTgwYmpPZ1pCTmt1SlNxM0NneHp1OXlES1JYNlNFSEcxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSzhNZkVqc21LZVhVUzVVZyt2VTRIakJkOWRIQWcvY2daTW13cnlvbmtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYM2VjOXN6OS9YYnQyeVRPbjBENjJ0Y3E1VHhxT1JpOWJwZ2hxNkFZcWhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGaUhjM0l3bHVyb1l3RlZTcGtTbmRXMUZ0THVtajNnMWp6MmhKZUY2RTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldERVBiRTZDdGZqSTBZK1ZhVWZ6SUt3U2NNV0doREwxQ1d3Y1B2dFBJQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FhdGJpblk4REQ3cklqSjFSNEw0eHFFbW01SXNlY1FlT1QxS0QyRUszdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtjRDBvOTRod2JLaGlXQTF5eXVveW1NN1ZxSWQxUHQ0VXVVM0NpTDJpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI5SGtQckJsY0grV1R2WXFjREQzSUZnMEhMVWhwd2FDYlYwRzVlSFI1RXVLVVBLN21CZmJDUUtTV2NFdCtnUDZrendGaGhNZFBqanlVaWk1UXlYWUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiIvS1oxSDRPQ21hTHZGOWdDa3FQd0oydTFHdDFuWlZnNEpuY3p0T2pMYUZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0Z19mMXZwOVJZYWJ6TU9FZUE4a2t3IiwicGhvbmVJZCI6Ijg5MTQ3Nzk0LTQ4M2ItNDFlZC1hYjExLTQ0MTk0ZTBhMWFiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkdWk0Y1lyUS9NbVNTZWMzNGxjVW83eENyTms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3VuekhsbVI2TTN4RmVWN2pudDEwbDVyb1BZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU2NzZDQ1BOIiwibWUiOnsiaWQiOiIyMzQ5MDcxMjE0NDUxOjI3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaTRpbFlRMnBDR3ZBWVlCeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaRFcweXJScCs5WTRhZmRQNElIdm11RG9YQnE0ZUtOWHVqUEpVRTcxR0RBPSIsImFjY291bnRTaWduYXR1cmUiOiJFc3I1RWVmdCtEODRwcUtWSXUxTi9lSGZYcVRXUitIK2pjY1ZLWHlHdVc0RXpiMlB4RUNVdGtYTEREbzVUUnBORmgrcVNDcEpBTENsL1hkUTFkeThEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNitTNlRwU2dNYzFYVEZrdTBIUG8xMnlHYWlHTE13cXdLelFLNkdkYkhKNDZTZEFXckZXT0RXZG9zVUVqYzZIeWtuT3F6ZlN2VnE1S1R6UU02ZDlaRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDcxMjE0NDUxOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldRMXRNcTBhZnZXT0duM1QrQ0I3NXJnNkZ3YXVIaWpWN296eVZCTzlSZ3cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY1NDIzMTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSENRIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | Dark-Love-MD",
  author: process.env.PACK_AUTHER || "Dark-Love-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Dark-Love-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Dark-Love-MD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Dark-Love-MD").toUpperCase(),
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
