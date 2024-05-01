const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('✅️ 𝘾𝙝𝙖𝙩 𝘿𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙔𝙖 𝙋𝙪𝙚𝙙𝙚𝙣 𝙐𝙨𝙖𝙧 𝙆𝙞𝙢𝘽𝙤𝙩-𝙈𝘿');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;

