

let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '😍', key: m.key } })
let str = `𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 𝑨 𝑳𝑨𝑺 𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 🤩⚡
 ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
> 🤖 *𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥:*
> Wa.me/593995004980
> ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
> 👑 *𝐂𝐫𝐞𝐚𝐝𝐨𝐫:*
> Wa.me/593992402778
> ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
> 📌 𝙄𝙜 𝘿𝙚𝙡 𝘽𝙤𝙩:
> 1) *${ig}*
> ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
> 📌 *𝙄𝙜 𝘿𝙚𝙡 𝘾𝙧𝙚𝙖𝙙𝙤𝙧:
> *${ig1}*
> ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^cuentas|cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler