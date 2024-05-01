const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘼 𝙈𝙄𝙎 𝘼𝙈𝙊𝙍𝙀𝙎 😍✨*\n\nꨄ︎ ${oi}\n\nꨄ︎ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:\n`;
  for (const mem of participants) {
    teks += `┣☞ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ 𝙆𝙞𝙢𝘽𝙤𝙩-𝐌𝐃\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
