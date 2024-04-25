

let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '😍', key: m.key } })
let str = `𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 𝑨 𝑳𝑨𝑺 𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 🤩⚡
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🤖 *𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥:*
Wa.me/593995004980
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *𝐂𝐫𝐞𝐚𝐝𝐨𝐫:*
Wa.me/593992402778
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚔️ *𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐧 𝐃𝐞𝐥 𝐁𝐨𝐭:*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📌 *𝐆𝐫𝐮𝐩𝐨𝐬 𝐎𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬:*
1) *${gp1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${gp2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📌 *𝐂𝐚𝐧𝐚𝐥 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐃𝐞𝐥 𝐁𝐨𝐭:*
 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📹 *𝐂𝐚𝐧𝐚𝐥 𝐃𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞:*
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📖 *𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐃𝐞𝐥 𝐂𝐫𝐞𝐚𝐝𝐨𝐫:*
${fb}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^cuentas|cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler