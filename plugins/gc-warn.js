const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙖𝙡𝙜𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } 𝙍𝙚𝙘𝙞𝙗𝙞𝙤 𝙪𝙣𝙖 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤!\n𝙈𝙤𝙩𝙞𝙫𝙤: ${sdms}\n*𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '*¡𝙀𝙨𝙩𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙀𝙨𝙩𝙖 𝘿𝙚𝙨𝙖𝙗𝙞𝙡𝙞𝙩𝙖𝙙𝙤 𝙋𝙤𝙧 𝙀𝙡 𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝘿𝙚𝙡 𝘽𝙤𝙩!*',
      );
    }
    user.warn = 0;
    await m.reply(
        `𝙏𝙚 𝙡𝙤 𝙖𝙙𝙫𝙚𝙧𝙩𝙞 𝙫𝙖𝙧𝙞𝙖𝙨 𝙫𝙚𝙘𝙚𝙨\n*@${
          who.split`@`[0]
        }* 𝙎𝙪𝙥𝙚𝙧𝙖𝙨𝙩𝙚𝙨 𝙡𝙖𝙨 *𝟯* 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨, 𝙥𝙧𝙤𝙘𝙚𝙙𝙤 𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙩𝙚 😠`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
