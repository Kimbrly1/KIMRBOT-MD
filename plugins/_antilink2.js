let linkRegex = /https:/i

export async function before(m, { isAdmin, isBotAdmin,text }) {

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
const linkThisGroup4 = `https://whatsapp.com/channel/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
if (m.text.includes(linkThisGroup4)) return !0
}
await conn.reply(m.chat, `🔰 *𝑬𝑵𝑳𝑨𝑪𝑬 𝑫𝑬𝑻𝑬𝑪𝑻𝑨𝑫𝑶!!*\n\n*${await this.getName(m.sender)} *𝑹𝑶𝑴𝑷𝑰𝑺𝑻𝑬𝑺 𝑳𝑨𝑺 𝑹𝑬𝑮𝑳𝑨𝑺, 𝑨𝑯𝑶𝑹𝑨 𝑺𝑬𝑹𝑨𝑺 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑫𝑶 𝑷𝑶𝑹𝑸𝑼𝑬 𝑬𝑹𝑬𝑺 𝑼𝑵𝑨 𝑩𝑨𝑺𝑼𝑹𝑨* `, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `🏷 *𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝘽𝘼𝙎𝙐𝙍𝘼𝙎 𝙄𝙉𝙎𝙏𝙍𝙐𝙎𝘼𝙎*`, m, fake, )
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender],'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘼𝙉𝘿𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊*`, m, fake, )
}
return !0

}
