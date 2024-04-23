import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*⚠️ 𝑷𝑶𝑹 𝑭𝑨𝑽𝑶𝑹 𝑰𝑵𝑮𝑹𝑬𝑺𝑬 𝑬𝑳 𝑵𝑶𝑴𝑩𝑹𝑬 𝑫𝑬𝑳 𝑽𝑰𝑫𝑬𝑶 𝑱𝑼𝑵𝑻𝑶 𝑪𝑰𝑵 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶*\n\n*—◉ Ejemplo:*\n*${usedPrefix + command} Begin you*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*⚠️ 𝑷𝑼𝑬𝑫𝑬𝑺 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑹 𝑬𝑳 𝑽𝑰𝑫𝑬𝑶 𝑫𝑬 𝑬𝑺𝑻𝑨 𝑭𝑶𝑹𝑴𝑨*
◉ ${usedPrefix}audio <numero>
◉ ${usedPrefix}video <numero> 

*—◉ Ejemplos:*
*◉ ${usedPrefix}audio 5*
*◉ ${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳ 📌 *_Link :_* ${v.url}
↳ 🕒 *_Duración :_* ${v.timestamp}
↳ 📥 *_Subido :_* ${v.ago}
↳ 👁 *_Vistas :_* ${v.views}`;
    }).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*⚠️ 𝑰𝑵𝑮𝑹𝑬𝑺𝑬 𝑬𝑳 𝑵𝑶𝑴𝑩𝑹𝑬 𝑫𝑬𝑳 𝑽𝑰𝑫𝑬𝑶 𝑱𝑼𝑵𝑻𝑶 𝑪𝑶𝑵 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶*');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
