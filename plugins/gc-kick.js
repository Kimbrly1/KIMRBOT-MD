const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*¡Este Comando Esta Desabilitado Por El Propietario Del Bot!*';
  const kicktext = `*🍧 Etiqueta A Una Persona O Responda A Un Mensaje Para Eliminarlo Del Grupo.*\n\n*📖 Ejemplo:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*🔰 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝘼 𝙐𝙣𝙖 𝙋𝙚𝙧𝙨𝙤𝙣𝙖 𝙊 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝘼𝙡 𝙈𝙚𝙣𝙨𝙖𝙟𝙚.*');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('*🔰 𝙉𝙤 𝙋𝙪𝙚𝙙𝙤 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙢𝙚 𝘾𝙤𝙣 𝙀𝙨𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤.*');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `*@${mentioned.split('@')[0]} 𝙁𝙐𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙀𝙓𝙄𝙏𝙊𝙎𝘼𝙈𝙀𝙉𝙏𝙀*`;
    const error1 = `*@${mentioned.split('@')[0]} 𝙀𝙎 𝙀𝙇 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼𝙇 𝘾𝙍𝙀𝘼𝘿𝙊𝙍*`;
    const error2 = `*@${mentioned.split('@')[0]} 𝙔𝘼 𝘼 𝙎𝙄𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙊 𝘼 𝘼𝘽𝘼𝙉𝘿𝙊𝙉𝘼𝘿𝙊 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊*`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `✨ *Api Caida*`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['kick'];
handler.tags = ['group'];
handler.command = /^(kick|ban|hechar|sacar)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
