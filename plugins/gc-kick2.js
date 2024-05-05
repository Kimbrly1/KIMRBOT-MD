const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝙃𝘼𝘽𝙄𝙇𝙄𝙏𝘼𝘿𝙊 𝙋𝙊𝙍 𝙀𝙇 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏*';
  const kicktext = `🔰 *𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙋𝘼𝙍𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙇𝙊.*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
