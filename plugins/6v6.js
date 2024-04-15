var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = './src/6vs6clk.png'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => ``).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`🕓 𝑰𝑵𝑮𝑹𝑬𝑺𝑨 𝑼𝑵 𝑯𝑶𝑹𝑨𝑹𝑰𝑶.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\n.6vs6 7pm🇪🇨/6pm🇲🇽`)
if (text.length < 0) return m.reply(`⚙️ 𝑯𝑶𝑹𝑨𝑹𝑰𝑶 𝑴𝑨𝑳 𝑬𝑺𝑪𝑹𝑰𝑻𝑶 𝑰𝑵𝑻𝑬𝑵𝑻𝑨 𝑫𝑬 𝑵𝑼𝑬𝑽𝑶.`)
let mensaje = args.join` `
let yo = `🕓 𝗛𝗢𝗥𝗔: *${text}*`
let texto = `╭──────⚔──────╮
   6𝐕𝐒6 𝑪𝑶𝑴𝑷𝑬𝑻𝑰𝑻𝑰𝑽𝑶
╰──────⚔──────╯

${yo}
📑 𝑹𝑬𝑮𝑳𝑨𝑺: 𝐶𝐿𝐾

╭─────────────╮
│ 𝑬𝑺𝑪𝑼𝑨𝑫𝑹𝑨 
│🤴🏻 ➤ 
│👤 ➤  
│👤 ➤ 
│👤 ➤ 
│👤 ➤ 
│👤 ➤ 
╰─────────────╯
╭─────────────╮
│ 𝑺𝑼𝑷𝑳𝑬𝑵𝑻𝑬𝑺 
│👤 ➤  
│👤 ➤ 
╰─────────────╯`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(6x6|6vs6)$/i
handler.group = true

export default handler