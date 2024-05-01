import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `╭࣭࣭࣭࣭࣭࣭ٜ۫───────────────╮
├̟☞ 🔱𝙉𝙤𝙢𝙗𝙧𝙚:
├̟☞ *${name}*
├ׁ̟̇──────────────────
├̟☞ 🔰𝙉𝙞𝙫𝙚𝙡:
├̟☞ *${user.level}*
├ׁ̟̇──────────────────
├̟☞ 🧩𝙀𝙭𝙥:
├̟☞ *${user.exp - min}/${xp}*
╰──────────────────╯

𝘽𝙚𝙗𝙚 𝙏𝙚 𝙃𝙖𝙘𝙚 𝙁𝙖𝙡𝙩𝙖 ${max - user.exp} 𝘿𝙚 𝙀𝙭𝙥 𝙋𝙖𝙧𝙖 𝙎𝙪𝙗𝙞𝙧 𝘿𝙚 𝙉𝙞𝙫𝙚𝙡😍🔰
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `😍 𝘽𝙞𝙚𝙣 𝙃𝙚𝙘𝙝𝙤 𝘽𝙚𝙗𝙚❤️‍🩹 ${conn.getName(m.sender)}    Nivel:`;
    const str = `╭࣭࣭࣭࣭࣭࣭ٜ۫───────────────╮
├̟☞ 𝘼𝙣𝙩𝙚𝙧𝙞𝙤𝙧 𝘿𝙚𝙡 𝙉𝙞𝙫𝙚𝙡:
├ׁ̟̇☞ *${before}*
├ׁ̟̇──────────────────
├ׁ̟̇☞ 𝙉𝙞𝙫𝙚𝙡 𝘼𝙘𝙩𝙪𝙖𝙡:
├ׁ̟̇☞ *${user.level}*
╰──────────────────╯

𝘽𝙚𝙗𝙚 𝙈𝙞𝙚𝙣𝙩𝙧𝙚 𝙈𝙖𝙨 𝙐𝙨𝙚 𝙆𝙞𝙢𝘽𝙤𝙩 𝙏𝙪 𝙉𝙞𝙫𝙚𝙡 𝙎𝙪𝙗𝙞𝙧𝙖 𝙈𝙖𝙨 𝙍𝙖𝙥𝙞𝙙𝙤❤️‍🩹
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

export default handler;