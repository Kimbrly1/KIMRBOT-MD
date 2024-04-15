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
  {m.reply ('𝑶𝑹𝑫𝑬𝑵 𝑹𝑬𝑪𝑰𝑩𝑰𝑫𝑨 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶 ✅');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
