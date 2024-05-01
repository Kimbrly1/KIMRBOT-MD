let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `𝙂𝙚𝙣𝙞𝙖𝙡 𝘽𝙗 𝙈𝙞𝙣𝙖𝙨𝙩𝙚𝙨 ${hasil} 𝙓𝙋 😍`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `⏰️ 𝙏𝙚 𝙏𝙤𝙘𝙖 𝙀𝙨𝙥𝙚𝙧𝙖𝙧 ${msToTime(time - new Date())} 𝙋𝙖𝙧𝙖 𝙑𝙤𝙡𝙫𝙚𝙧 𝙐𝙨𝙖𝙧 𝙀𝙨𝙩𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤`  

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*𝙆𝙞𝙢𝘽𝙤𝙩-𝙈𝘿*', 'status@broadcast')   
//m.reply(`𝙒𝙤𝙬,𝙉𝙖𝙙𝙖 𝙈𝙖𝙡 𝙈𝙞𝙣𝙖𝙨𝙩𝙚𝙨 ${hasil} 𝙓𝙋`)
global.db.data.users[m.sender].lastmiming = new Date * 1

}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}