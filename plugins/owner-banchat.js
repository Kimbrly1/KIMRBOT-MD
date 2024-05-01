const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('✅️  𝘾𝙝𝙖𝙩 𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤 𝙔𝙖 𝙉𝙤 𝙋𝙤𝙙𝙧𝙖𝙣 𝙐𝙨𝙖𝙧 𝙆𝙞𝙢𝘽𝙤𝙩-𝙈𝘿');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;