const toxicRegex = /puto|puta|estupido|imbecil|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('*⚠️ ' + `${user.warn == 1 ? `𝑯𝑶𝑳𝑨 𝑴𝑰 𝑨𝑴𝑰𝑮@ @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, 𝑫𝑬𝑪𝑰𝑹 𝑳𝑨 𝑷𝑨𝑳𝑨𝑩𝑹𝑨 "${isToxic}" 𝑬𝑺𝑻𝑨 𝑷𝑹𝑶𝑯𝑰𝑩𝑰𝑫𝑶 𝑬𝑵 𝑬𝑺𝑻𝑬 𝑮𝑹𝑼𝑷𝑶.: ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`*🥀 𝑯𝑬𝒀 𝑷𝑬𝑹𝑹@ @${m.sender.split`@`[0]}, 𝑺𝑼𝑷𝑬𝑹𝑨𝑺𝑻𝑬𝑺 𝑳𝑨𝑺 5 𝑨𝑫𝑽𝑬𝑹𝑻𝑬𝑵𝑪𝑰𝑨𝑺 𝑨𝑯𝑶𝑹𝑨 𝑻𝑬 𝑽𝑨𝑺 𝑪𝑶𝑴𝑶 𝑼𝑵/𝑨 𝑷𝑬𝑹𝑹@ 𝑸𝑼𝑬 𝑬𝑹𝑬𝑺🤑⚡`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
