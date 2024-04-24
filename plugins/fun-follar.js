
let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
🥵👅💦 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅💦

*¡𝑨𝑪𝑨𝑩𝑨𝑺 𝑫𝑬 𝑭𝑶𝑳𝑳𝑨𝑹𝑻𝑬 𝑨 𝑳𝑨 𝑷𝑼𝑻𝑨 𝑫𝑬  ${text}* ⁩ 𝑨 4 𝑷𝑨𝑻𝑨𝑺 𝑸𝑼𝑬 𝑻𝑬 𝑨 𝑮𝑬𝑴𝑰𝑫𝑶 𝑫𝑰𝑪𝑰𝑬𝑵𝑫𝑶  "𝙾𝚑, 𝙾𝚑 𝙿𝚊𝚙𝚒 𝙳𝚊𝚖𝚎 𝙼𝚊𝚜 𝙳𝚞𝚛𝚘, 𝙿𝚘𝚗𝚖𝚎𝚕𝚊 𝙴𝚗 𝙻𝚊 𝙱𝚘𝚌𝚊💦" 𝑬𝑺𝑻𝑨 𝑻𝑨𝑵 𝑰𝑵𝑽𝑨𝑳𝑰𝑫𝑨 𝑸𝑼𝑬 𝑳𝑨 𝑯𝑨𝑺 𝑫𝑬𝑱𝑨𝑫𝑶 𝑬𝑵 𝑳𝑨 𝑺𝑰𝑳𝑳𝑨 𝑫𝑬 𝑹𝑼𝑬𝑫𝑨𝑺!*

😍🤤💦 *¡𝒀𝑨 𝑻𝑬 𝑯𝑨𝑵 𝑭𝑶𝑳𝑳𝑨𝑫𝑶!* 😍🤤💦 

*${text}* `, null, { mentions: [user] })
}

handler.command = /^(Follar|violar)/i
handler.fail = null
handler.register = true
export default handler
