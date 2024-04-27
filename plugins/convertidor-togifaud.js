const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*🔍 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝘼 𝙐𝙣 𝙑𝙞𝙙𝙚𝙤 𝙌𝙪𝙚 𝘿𝙚𝙨𝙚𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙀𝙣 𝙂𝙞𝙛 𝘾𝙤𝙣 𝘼𝙪𝙙𝙞𝙤*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*❌ 𝙀𝙡 𝙏𝙞𝙥𝙤 𝘿𝙚 𝘼𝙧𝙘𝙝𝙞𝙫𝙤 ${mime} ❌🚫, 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝘼 𝙐𝙣 𝙑𝙞𝙙𝙚𝙤 𝙌𝙪𝙚 𝘿𝙚𝙨𝙚𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙀𝙣 𝙂𝙞𝙛 𝘾𝙤𝙣 𝘼𝙪𝙙𝙞𝙤*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*📄 𝙇𝙖 𝙈𝙪𝙨𝙞𝙘𝙖 𝙎𝙚 𝙍𝙚𝙥𝙧𝙤𝙙𝙪𝙘𝙚 𝘾𝙪𝙖𝙣𝙙𝙤 𝘼𝙗𝙧𝙖𝙨 𝙀𝙡 𝘼𝙧𝙘𝙝𝙞𝙫𝙤*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
