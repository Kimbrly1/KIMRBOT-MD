const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️¡𝑯𝑬𝒀!! 𝑫𝑨𝑳𝑬 𝑺𝑼𝑨𝑽𝑬 🤨 𝑻𝑬 𝑭𝑨𝑳𝑻𝑨 ${msToTime(time - new Date())} 𝑷𝑨𝑹𝑨 𝑽𝑶𝑳𝑽𝑬𝑹 𝑨 𝑹𝑶𝑩𝑨𝑹*`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `*🤑𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨 𝑨 𝑸𝑼𝑰𝑬𝑵 𝑳𝑬 𝑽𝑨𝑺 𝑨 𝑹𝑶𝑩𝑨𝑹🤑.*`;
  if (!(who in global.db.data.users)) throw `*💖 Quien Es Ese Usuario?, No Lo Tengo Registrado En Mi Base De Datos!.*`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} 𝑻𝑰𝑬𝑩𝑬 𝑴𝑬𝑵𝑶𝑺 𝑫𝑬 *${ro} xp*\n𝑵𝑶 𝑳𝑬 𝑹𝑶𝑩𝑬𝑺 𝑨 𝑼𝑵 𝑷𝑶𝑩𝑹𝑬 𝑺𝑰𝑵 𝑷𝑨𝑫𝑹𝑬𝑺`, null, {mentions: [who]});
  global.db.data.users[m.sender].exp += rob;
  global.db.data.users[who].exp -= rob;
  m.reply(`*✅️ 𝑬𝑿𝑰𝑻𝑶 𝑹𝑶𝑩𝑨𝑺𝑻𝑬𝑺 ${rob} 𝑿𝑷 𝑨𝑳 𝑼𝑺𝑼𝑨𝑹𝑰𝑶 @${who.split`@`[0]}*`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
