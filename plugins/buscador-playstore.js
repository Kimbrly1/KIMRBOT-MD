import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "📍 *Ingrese Un Nombre De La App*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `📍 *Ingrese Un Nombre De La App*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎: ${gPlay.titulo}
🧬 𝙄𝘿𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍: ${gPlay.id}
⛓️ 𝙇𝙄𝙉𝙆: ${gPlay.link}
🖼️ 𝙄𝙈𝘼𝙂𝙀𝙉: ${gPlay.imagen}
✍️ 𝘿𝙀𝙎𝘼𝙍𝙍𝙊𝙇𝙇𝘼𝘿𝙊𝙍: ${gPlay.desarrollador}
📜 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊́𝙉: ${gPlay.descripcion}
💲 𝙈𝙊𝙉𝙀𝘿𝘼: ${gPlay.moneda}
🎭 𝙂𝙍𝘼𝙏𝙄𝙎?: ${gPlay.gratis}
💸 𝙋𝙍𝙀𝘾𝙄𝙊: ${gPlay.precio}
📈 𝙋𝙐𝙉𝙏𝙐𝘼𝘾𝙄𝙊́𝙉: ${gPlay.puntuacion}`},{quoted:m})
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;