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
  {m.reply ('╔═════ @subject ═════╗\n╟✎﹏ *BIENVENIDO(A)*\n╟✎﹏ @user\n╟✎﹏📄𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂́𝑁: \n╚═══𝒀𝒆𝒓𝒂𝒚 𝑶𝒇𝒊𝒄𝒊𝒂𝒍👽);}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
