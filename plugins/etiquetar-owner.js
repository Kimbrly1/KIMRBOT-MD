let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*⚠️𝙃𝙚𝙮 𝘼𝙡𝙩𝙤! 𝙉𝙤 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙚𝙨 𝘼 𝙈𝙞 𝘽𝙚𝙗𝙚 𝙎𝙞 𝙀𝙨 𝘼𝙡𝙜𝙤 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩𝙚 𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙖 𝘾𝙤𝙣 𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧🚫*` ,m, { contextInfo:{ externalAdReply: {title: '𝙆𝙞𝙢𝘽𝙤𝙩-𝙈𝘿❤️‍🩹', body: 'ɴᴏ ᴇᴛɪǫᴜᴇᴛᴇs', sourceUrl: 'https://www.instagram.com/sebas.mvp_official0?igsh=cGk3Zmd0c3Bta280'}}})
}
handler.customPrefix = /@50487499606/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})
