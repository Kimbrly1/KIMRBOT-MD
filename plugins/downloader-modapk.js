import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*⚡ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙐𝙣 𝙉𝙤𝙢𝙗𝙧𝙚 𝘿𝙚 𝙐𝙣𝙖 𝘼𝙥𝙠 𝙋𝙖𝙧𝙖 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧𝙡𝙤 🎌*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `🔍 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤𝙧 𝘿𝙚 𝘼𝙥𝙩𝙤𝙞𝙙𝙚 📲\n\n😺 *𝙉𝙤𝙢𝙗𝙧𝙚:* ${data5.name}\n🚩 *𝙋𝙖𝙘𝙠𝙖𝙜𝙚:* ${data5.package}\n🎌 *𝙐𝙡𝙩𝙞𝙢𝙖 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤𝙣:* ${data5.lastup}\n💝 *𝙋𝙚𝙨𝙤:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '𝙇𝙖 𝘼𝙥𝙥 𝙀𝙨 𝙈𝙪𝙮 𝙋𝙚𝙨𝙖𝙙𝙖 𝙉𝙤 𝙎𝙚 𝙋𝙪𝙙𝙤 𝙀𝙣𝙫𝙞𝙖𝙧 𝙀𝙡 𝘼𝙧𝙘𝙝𝙞𝙫𝙤😨.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*⚠ 𝙀𝙧𝙧𝙤𝙧 𝙉𝙤 𝙎𝙚 𝙋𝙪𝙙𝙤 𝙀𝙣𝙫𝙞𝙖𝙧 𝙀𝙡 𝘼𝙧𝙘𝙝𝙞𝙫𝙤.*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = true
export default handler;
