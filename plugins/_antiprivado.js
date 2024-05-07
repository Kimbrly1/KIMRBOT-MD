export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`🔰 𝙃𝙊𝙇𝘼 𝙈𝙄 𝙀𝙎𝙏𝙄𝙈𝘼𝘿𝙊 🔰 @${m.sender.split`@`[0]}, 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊 𝙋𝙀𝙍𝙊 𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙏𝙄𝙈𝙄𝘿𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍𝙈𝙀 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊 \n\n𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝘼 𝘾𝙊𝙉 𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍𝙏𝙀\n\n wa.me/593992402778`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}