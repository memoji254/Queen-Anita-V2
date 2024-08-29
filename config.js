//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JZV1ZQOGJBK1RMaUlRMXdrUWRVK3VXMGJMSmc3ZmpaYmYyWEtxcWJtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09hNnBkMEJ2ZUNvVldsZlE0U2lDMnVmcW00clZxUXFKVENFdmJpenZ6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SjNjWC8yWTY3aHBkM3RXSGNMUnE2MWJRNk1MZG5RR0tHQmhLTTg5czBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxOFNBeTIvalFwZEFTcWVjbm92WFpzR3lwWVFsbmszZGFrbG0xTGhTTzJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFbTE1ZkRiV0x1TVZUcDVFN3lZWTdaOWZYeDU4UDZocU1Oak9MNmtobHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIUHVDT2t5MFZSd0dzM2lueDd4amJtN2pza1ZaY1ZwOG9wVk9mZVNySEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RjTVZuV3Bzd2dsWXJVSWsrSnR5cmNRSDNvWFpqVnpGWUZ2K0d0NWIyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEptYm56WEgvWG9tS0NqMkl5NlZnTDJ3bkYxRHIrRE03aWpGeVA0czJoaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhaWTZweVpqM2krQnNkT2p6aFRLNGsvM0QrRW1kVEMvcmMxeVpnWjRLbGZoSE93OEFydnFOeGtwMXNnR3pTMlJNS003Wjd1V0tTd3h2NGs2VG1KYWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJJN0RsdldDUXEvQmdLYU9GdEdIVFg0Z2lsSkczMDVnRGwvdFZpQzNLOXN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpOEpmQkVVOVQ1bVM0dmlCQW5iLXRnIiwicGhvbmVJZCI6ImUwMGZkZmU1LTAzZTAtNDQ5Yi1iMzY3LTMzNjhhYWFiODI0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnK3d2REYweVEzWnFuQk02ME5INm4ySmE1VTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1WTGd3YXF3TEZVNDJQZzFoSTFBQ25WMDNBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFXOFRUTVk3IiwibWUiOnsiaWQiOiIyNTQ3MDA2Mzk1MTg6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibTNtfsO4aiEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvTjUxOFF4disrdGdZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkU2UGVLTk8yVXhXTmdUOGkyLzcyNjlnVmsvQitkZFNCUHBSU3VnK0RXQTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikp0eDkrR0NwQnNqbmdXak9vdmc1SW9yRkZSd0FPU0lXOXI1ZW1BR0o3MTZlbitDT0k2dXpELzNCdU1VMmoxUnhROUJ4azZqK0luZjdkVlBNYjllTkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlYTNkMHVQcGdoSjZWaXp3SWwxZkRkbEdkQ1IwOFpTSzVUTHhtR2UvVXdnN1lMeEdUZDhxdHZJN0twNDFNdHlaN2sxYVNUdjdrSDR6R0pGK3dlZ2Fqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwMDYzOTUxODozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJST2ozaWpUdGxNVmpZRS9JdHYrOXV2WUZaUHdmblhVZ1Q2VVVyb1BnMWdOIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0ODkxMDkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU54NiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
