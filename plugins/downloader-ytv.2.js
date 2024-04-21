import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*🚫𝑰𝑵𝑮𝑹𝑬𝑺𝑬 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑱𝑼𝑵𝑻𝑶 𝑪𝑶𝑵 𝑬𝑳 𝑳𝑰𝑵𝑲 𝑫𝑬 𝑼𝑵 𝑽𝑰𝑫𝑬𝑶 𝑫𝑬 𝒀𝑶𝑼𝑻𝑼𝑩𝑬*';
  await m.reply(`*_⏳𝘗𝘳𝘰𝘤𝘦𝘴𝘢𝘯𝘥𝘰 𝘝𝘪𝘥𝘦𝘰...⏳_*\n\n*◉ 𝘚𝘪 𝘌𝘭 𝘝𝘪𝘥𝘦𝘰 𝘕𝘰 𝘚𝘦 𝘌𝘯𝘷𝘪𝘢 𝘗𝘳𝘶𝘦𝘣𝘦 𝘓𝘰𝘴 𝘚𝘪𝘨𝘶𝘪𝘦𝘯𝘵𝘦𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴:\n\n #playdoc \n\n #play.2 \n\n #ytmp4doc`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `*⚡ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 ⚡*\n\n📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${ttl}\n\n💣 *𝙿𝙴𝚂𝙾:* ${size}\n\n  𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*⚡ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 ⚡*\n\n📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${n}\n\n💣 *𝙿𝙴𝚂𝙾:* ${n3}\n\n  𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*❗𝑬𝑳 𝑽𝑰𝑫𝑬𝑶 𝑵𝑶 𝑺𝑬 𝑷𝑼𝑫𝑶 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑹𝓻*', m);
    }
  }
};
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
