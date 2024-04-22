const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('☠️ *⚠️Hey Alto⚠️!! el anti link esta activo pero eres admin, ¡Estás salvado por el Dios eterno 🌅!*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*¡Enlace detectado!, Mandaste un enlace prohibido por lo cual seras eliminado*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('🥷🏼 *𝑵𝑶 𝑺𝑶𝒀 𝑨𝑫𝑴𝑰𝑵, 𝑵𝑶 𝑷𝑼𝑬𝑫𝑶 𝑽𝑶𝑻𝑨𝑹 𝑨 𝑼𝑵𝑨 𝑩𝑨𝑺𝑼𝑹𝑨 🫤*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*¡𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑬𝑺𝑻𝑨 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 𝑵𝑰 𝑷𝑼𝑬𝑫𝑶 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑹𝑻𝑬📌!*');
  }
  return !0;
}

