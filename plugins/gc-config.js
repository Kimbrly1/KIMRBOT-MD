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
  {m.reply('𝑮𝑹𝑼𝑷𝑶 𝑨𝑩𝑰𝑬𝑹𝑻𝑶🔓\n 𝑶𝑹𝑫𝑬𝑵𝑨𝑫𝑶 𝑷𝑶𝑹:\n@user\n ╰ ► 𝑻𝑶𝑫𝑶𝑺 𝑷𝑼𝑬𝑫𝑬𝑵 𝑬𝑺𝑪𝑹𝑰𝑩𝑰𝑹 𝑬𝑵 𝑬𝑳 𝑮𝑹𝑼𝑷𝑶');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
