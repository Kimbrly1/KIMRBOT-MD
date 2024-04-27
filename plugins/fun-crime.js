//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
let crime = 500
let diamante = 10
const handler = async (m, {conn, usedPrefix, command, groupMetadata, participants, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`😨 𝙃𝙚𝙮 𝙡𝙖 𝙥𝙤𝙡𝙞𝙘𝙞𝙖 𝙚𝙨𝙩𝙖 𝙫𝙞𝙜𝙞𝙡𝙖𝙣𝙙𝙤 𝙚𝙣 𝙚𝙨𝙩𝙖 𝙯𝙤𝙣𝙖 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙚𝙣: ${msToTime(date - new Date())}`)
let randow
if (m.isGroup) randow = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else randow = m.chat
try {
let ps = groupMetadata.participants.map(v => v.id)
let randow = ps.getRandom()
let users = global.db.data.users[randow]
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)
let or = ['text', 'text2', 'text3', 'text4', 'text5']; 
let media = or[Math.floor(Math.random() * 4)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') return m.reply(`🍧 ${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') return m.reply(`🚓 ${pickRandom(global.robmal)} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= crime) 
if (media === 'text3') return m.reply(`💰 *${pickRandom(global.robar)}*\n\n${diamond} 💎Diamante\n${money} 🍧 YerayCoins`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)
if (media === 'text4') return m.reply(`🦋 ${pickRandom(global.robmal)}\n\n${diamond} 💎Diamante\n${money} 🍧 YerayCoins`).catch(global.db.data.users[m.sender].limit -= diamante).catch(global.db.data.users[m.sender].money -= crime)
if (media === 'text5') return conn.reply(m.chat, `😏 𝙡𝙚 𝙝𝙖𝙨 𝙧𝙤𝙗𝙖𝙙𝙤 𝙖 @${randow.split`@`[0]} 𝑈𝑛𝑎 𝐶𝑎𝑛𝑡𝑖𝑑𝑎𝑑 𝐷𝑒: ${exp} XP`, m, {contextInfo: {mentionedJid: [randow]}}).catch(global.db.data.users[m.sender].exp += exp).catch(global.db.data.users[randow].exp -= crime) 
} catch (e) {
console.log(e)}}
handler.help = ['robar'];
handler.tags = ['xp'];
handler.command = /^(abancar|Abancar|Crime|crime)$/i
handler.register = true
handler.group = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['𝙍𝙤𝙗𝙖𝙨𝙩𝙚 𝙪𝙣 𝘽𝙖𝙣𝙘𝙤 🤑🫰🏻 𝙮 𝙊𝙗𝙩𝙪𝙫𝙞𝙨𝙩𝙚', '𝙉𝙚𝙜𝙤𝙘𝙞𝙖𝙧𝙩𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙟𝙚𝙛𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙖𝙛𝙞𝙖 𝙮 𝙊𝙗𝙩𝙪𝙫𝙞𝙨𝙩𝙚 :', '𝘾𝙖𝙨𝙞 𝙩𝙚 𝙖𝙩𝙧𝙖𝙥𝙖 𝙡𝙖 𝙥𝙤𝙡𝙞𝙘𝙞𝙖 𝙥𝙚𝙧𝙤 𝙡𝙤𝙜𝙧𝙖𝙨𝙩𝙚 𝙧𝙤𝙗𝙖𝙧 𝙪𝙣𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙫𝙖𝙡𝙞𝙤𝙨𝙖 𝙙𝙚 𝙊𝙧𝙤 💰. !𝙏𝙚 𝙘𝙪𝙞𝙙𝙖𝙙𝙤 𝙡𝙖 𝙥𝙧𝙤𝙭𝙞𝙢𝙖 𝙫𝙚𝙯! 𝙊𝙗𝙩𝙪𝙫𝙞𝙨𝙩𝙚:', '𝙇𝙤𝙨 𝙢𝙖𝙛𝙞𝙤𝙨𝙤𝙨 𝙩𝙚 𝙝𝙖𝙣 𝙥𝙖𝙜𝙖𝙙𝙤 :', '𝙇𝙚 𝙝𝙖𝙨 𝙧𝙤𝙗𝙖𝙙𝙤 𝙖𝙡 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙂𝙧𝙪𝙥𝙤', '𝙇𝙚 𝙧𝙤𝙗𝙖𝙧𝙩𝙚 𝙖 𝙩𝙪 𝙥𝙧𝙚𝙨𝙞𝙙𝙚𝙣𝙩𝙚 𝙪𝙣𝙖 𝙨𝙪𝙢𝙖𝙧 𝙙𝙚 :', '𝙡𝙚 𝙧𝙤𝙗𝙖𝙧𝙩𝙚 𝙖 𝙪𝙣 𝙛𝙖𝙢𝙤𝙨𝙤 𝙪𝙣 𝙫𝙖𝙡𝙤𝙧 𝙙𝙚 :'];
global.robmal = ['𝙇𝘼 𝙋𝙊𝙇𝙄𝘾𝙄𝘼 𝙏𝙀 𝙑𝙄𝙊 👮‍♂️ 𝙋𝙀𝙍𝘿𝙄𝙎𝙏𝙀', '𝙁𝙪𝙞𝙨𝙩𝙚 𝙖 𝙧𝙤𝙗𝙖𝙧 𝙪𝙣 𝙗𝙖𝙣𝙘𝙤 💖 𝙮 𝙩𝙪 𝙖𝙮𝙪𝙙𝙖𝙧𝙩𝙚 𝙦𝙪𝙚 𝙫𝙚𝙣𝙙𝙞𝙤 𝙖 𝙡𝙖 𝙥𝙤𝙡𝙞𝙘𝙞𝙖, 𝙥𝙚𝙧𝙙𝙞𝙨𝙩𝙚', '𝙉𝙤 𝙥𝙪𝙙𝙞𝙨𝙩𝙚 𝙚𝙨𝙘𝙖𝙥𝙖𝙧 𝙙𝙚 𝙡𝙖 𝙋𝙤𝙡𝙞𝙘𝙞𝙖 🚔😃, 𝙥𝙚𝙧𝙙𝙞𝙨𝙩𝙚 :']
