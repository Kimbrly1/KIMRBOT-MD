import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen8, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿🥷🏻💥', body: '𝖡𝗒: Sebas - 𝖶𝖺𝗈𝗌', sourceUrl: `https://www.instagram.com/sebas.mvp_official0?igsh=cGk3Zmd0c3Bta280`, thumbnail: imagen6}}})}

return !0 }
export default handler
