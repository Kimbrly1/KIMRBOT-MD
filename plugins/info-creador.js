function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['owner', 'creador']  
handler.register = true
export default handler

/*let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:👾 𝙈𝙮 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 ✨\nFN:👾 𝙈𝙮 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 ✨\nORG:👾 𝙈𝙮 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 ✨\nTITLE:\nitem1.TEL;waid=593992402778:5493585753625\nitem1.X-ABLabel:👾 𝙈𝙮 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 ✨\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:👾 𝙈𝙮 𝘾𝙧𝙚𝙖𝙩𝙤𝙧⚡️\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '👾𝙈𝙮 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 ✨', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creador', 'propietario', 'dueño'] 

handler.register = true
export default handler*/