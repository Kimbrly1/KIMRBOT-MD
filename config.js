import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"

global.botnumber = ""
global.confirmCode = ""

//• ↳𝑷𝑶𝑵 𝑳𝑶𝑺 𝑵𝑼𝑴𝑬𝑹𝑶𝑺 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑨𝑺
global.owner = [
['593992402778', '👽 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 💥', true],
['593986923159', '𝐉𝐨𝐧𝐚𝐭𝐡𝐚𝐧 (𝗢𝘄𝗻𝗲𝗿) 📖', true],
['593967323759', '𝐈𝐬𝐦𝐚𝐞𝐥 (𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿)🔍', true],
['593982981749', '𝐉𝐚𝐫𝐢𝐞𝐥 (𝗦𝘂𝗽𝗽𝗼𝗿𝘁) 💻', true],
['593969499267', '𝐒𝐭𝐞𝐯𝐞𝐧 (𝗘𝗱𝗶𝘁𝗼𝗿) 💻', true]]

//• ↳𝑨𝑮𝑹𝑬𝑮𝑨𝑻𝑬 𝑺𝑰 𝑬𝑹𝑬𝑺 𝑶𝑾𝑵𝑬𝑹
global.contactos = [
["593992402778", '𝐒𝐞𝐛𝐚𝐬 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 ✅', 1],
["593986923159", '𝐉𝐨𝐧𝐚𝐭𝐡𝐚𝐧 (𝗢𝘄𝗻𝗲𝗿) 📖', 1],
["593967323759", '𝐈𝐬𝐦𝐚𝐞𝐥 (𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿) 🍧', 1],
["593982981749", '𝐉𝐚𝐫𝐢𝐞𝐥 (𝗦𝘂𝗽𝗽𝗼𝗿𝘁) 💻', 1],
["593969499267", '𝐒𝐭𝐞𝐯𝐞𝐧 (𝗘𝗱𝗶𝘁𝗼𝗿) 💻', 1]]

global.suittag = ['593992402778'];
global.prems = ['593995004980'];

global.lenguajeSK = es //idioma de sakurabot

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 🍁
global.packname = '𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿';
global.author = 'Sebas 🌩';
global.wm = '𝙔𝙚𝙧𝙖𝙮 : 𝘽𝙤𝙩';
global.sk = '𝙔𝙚𝙧𝙖𝙮 : 𝘽𝙤𝙩 - 𝙈𝘿';
global.titulowm = '𝙔𝙚𝙧𝙖𝙮 : 𝘽𝙤𝙩';
global.titulowm2 = `𝘠𝘦𝘳𝘢𝘺 𝙊𝙛𝙞𝙘𝙞𝙖𝙡`
global.igfg = 'Yeray Oficial';
global.vs = '1.0.7';

//• ↳ ◜𝑴𝑺𝑮 𝑫𝑬 𝑬𝑺𝑷𝑬𝑹𝑨◞ • 🈸
global.wait = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waittt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';

//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./AhoraQue.png');
global.imagen8 = fs.readFileSync('./Que.jpg');

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp1 = 'https://chat.whatsapp.com/KPZpP0VnlA875UpXCDPc0E' //Grupo Oficial De YerayBot

global.gp2 = 'https://chat.whatsapp.com/EBrkzuIFCQfGCD6dfxjEFk' //𝘽 𝘖 𝘛 𝘚 :  𝙈 𝘝 𝘗 🔥🤖

global.gp3 = 'https://chat.whatsapp.com/Djzqsr8k0onE9v1PoSAJwz' //SEBAS BOT-MD✅

global.gp4 = 'https://chat.whatsapp.com/GFJQei0YqQFCaxaGM6wwXW' //SebastianBot - Community 👽💥

global.channel = 'https://whatsapp.com/channel/0029VaWIVax2975INZkaGi0s' //Canal Oficial

global.yt = 'https://www.youtube.com/@sebas.mvp_official' //Canal De Youtube

global.md = 'https://github.com/ale-rmz/YerayBot-MD' //Github Oficial

global.fb = 'https://www.facebook.com/profile.php?id=100091794702798' //Facebook Del Propietario

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🧃' + hour;

global.mods = [];


//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nYerayBot`;
global.gt = 'SakuraBot';
global.mysticbot = 'YerayBot';
global.mysticbot = 'https://github.com/ale-rmz/YerayBot-MD';
global.nomorown = '573012482694';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*📅 Fecha:*  ${moment.tz('America/Guayaquil').format('DD/MM/YY')}`;
global.bottime = `*🕒 Hora:* ${moment.tz('America/Guayaquil').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
