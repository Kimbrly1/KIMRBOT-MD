import fs from 'fs';
const timeout = 60000;
const poin = 500;
const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, '𝙏𝙤𝙙𝙖𝙫𝙞𝙖 𝙝𝙖𝙮 𝙖𝙘𝙚𝙧𝙩𝙞𝙟𝙤𝙨 𝙨𝙞𝙣 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙘𝙝𝙖𝙩', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ *${json.question}*

*⌛ 𝙏𝙞𝙚𝙢𝙥𝙤:* ${(timeout / 1000).toFixed(2)} Segundos
*🌴 𝘽𝙤𝙣𝙤:* +${poin} Exp
`.trim();
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `𝙎𝙚 𝙖𝙘𝙖𝙗𝙤 𝙚𝙡 𝙩𝙞𝙚𝙢𝙥𝙤!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout)];
};
handler.help = ['acertijo'];
handler.tags = ['game'];
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i;
export default handler;
