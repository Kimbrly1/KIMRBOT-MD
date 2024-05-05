let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `🏷 *𝙃𝙀𝙔 𝘼𝙈𝙊𝙍😨 𝙀𝙉𝙑𝙄𝘼𝙎𝙏𝙀𝙎 𝙐𝙉 𝙇𝙄𝙉𝙆 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊, 𝙏𝙀 𝙎𝘼𝙇𝙑𝘼𝙎𝙏𝙀𝙎 𝙋𝙊𝙍𝙌𝙐𝙀 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉*`, m, fake, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `⚠ *𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝘿𝙊*\n\n*${await this.getName(m.sender)}😼👊🏻 𝙈𝘼𝙉𝘿𝘼𝙎𝙏𝙀𝙎 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊, 𝙋𝙊𝙍 𝙇𝙊 𝘾𝙐𝘼𝙇 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊*`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `🔰 *𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎*`, m, fake, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊*`, m, fake, )
}
return !0

}
