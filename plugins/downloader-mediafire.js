import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*⚠ 𝙀𝙧𝙧𝙤𝙧 𝙋𝙤𝙧 𝙁𝙖𝙫𝙤𝙧 𝙀𝙣𝙫𝙞𝙚 𝙐𝙣 𝙇𝙞𝙣𝙠 𝘿𝙚 𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚, 𝙎𝙞𝙢𝙞𝙡𝙖𝙧 𝘼: ${usedPrefix + command} https://www.mediafire.com/file/1e9xj7xfea2k9jy/termux-0-119-1.apk/file*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `
*⚘️ 𝙉𝙤𝙢𝙗𝙧𝙚:* ${resEX.filename}
*💥 𝙋𝙚𝙨𝙤:* ${resEX.filesizeH}
*🐈 𝙏𝙞𝙥𝙤:* ${resEX.ext}

_*⏳ 𝙃𝙚𝙮 𝙀𝙨𝙥𝙚𝙧𝙚 𝙀𝙨𝙩𝙤𝙮 𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙎𝙪 𝘼𝙧𝙘𝙝𝙞𝙫𝙤. . . .*_`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `
*⚘️ 𝙉𝙤𝙢𝙗𝙧𝙚:* ${name}
*💥 𝙋𝙚𝙨𝙤:* ${size}
*🐈 𝙏𝙞𝙥𝙤:* ${mime}

 _*⏳ 𝙃𝙚𝙮 𝙀𝙨𝙥𝙚𝙧𝙚 𝙀𝙨𝙩𝙤𝙮 𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙎𝙪 𝘼𝙧𝙘𝙝𝙞𝙫𝙤. . . .*_`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('*⚠ 𝙀𝙧𝙧𝙤𝙧 𝙋𝙤𝙧 𝙁𝙖𝙫𝙤𝙧 𝙀𝙣𝙫𝙞𝙚 𝙐𝙣 𝙇𝙞𝙣𝙠 𝘿𝙚 𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚, 𝙎𝙞𝙢𝙞𝙡𝙖𝙧 𝘼:*\n*◉ https://www.mediafire.com/file/1e9xj7xfea2k9jy/termux-0-119-1.apk/file*');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
