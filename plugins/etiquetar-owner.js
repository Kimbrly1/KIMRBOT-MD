let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*⚠𝘼𝙡𝙩𝙤 𝙃𝙖𝙮 𝙋𝙚𝙧𝙧𝙤⚠ 𝙉𝙤 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙚𝙨 𝘼 𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧🚫, 𝙎𝙞 𝙀𝙨 𝘼𝙡𝙜𝙤 𝙐𝙧𝙜𝙚𝙣𝙩𝙚 𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙖 𝘾𝙤𝙣 𝙚𝙡 𝘼 𝙎𝙪 𝘾𝙝𝙖𝙩 𝙋𝙧𝙞𝙫𝙖𝙙𝙤 𝙋𝙖𝙧𝙖 𝙈𝙖𝙨 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣😃*` ,m, { contextInfo:{ externalAdReply: {title: '𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿', body: '𝖭𝗈 𝖤𝗍𝗂𝗊𝗎𝖾𝗍𝖾𝗌 𝖠 𝖬𝗂 𝖢𝗋𝖾𝖺𝖽𝗈𝗋', sourceUrl: 'https://www.instagram.com/sebas.mvp_official0?igsh=cGk3Zmd0c3Bta280'}}})
}
handler.customPrefix = /@50487499606/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})
