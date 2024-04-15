const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
⚡️ *Mal Uso Del Comando*

 ${usedPrefix + command} abrir*
 ${usedPrefix + command} cerrar*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply ('𝑮𝑹𝑼𝑷𝑶 𝑪𝑶𝑵𝑭𝑰𝑮𝑼𝑹𝑨𝑫𝑶 𝑬𝑿𝑰𝑻𝑶𝑺𝑨𝑴𝑬𝑵𝑻𝑬 😁');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
