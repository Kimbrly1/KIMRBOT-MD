const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, 𝐓𝐈𝐄𝐍𝐄 𝐒𝐄𝐍𝐓𝐈𝐌𝐈𝐄𝐍𝐓𝐎𝐒 𝐃𝐄𝐋 𝐔𝐍𝐎 𝐏𝐎𝐑 𝐄𝐋 𝐎𝐓𝐑𝐎😏 ${toM(b)}, 𝐇𝐀𝐂𝐄𝐍 𝐁𝐔𝐄𝐍𝐀 𝐏𝐀𝐑𝐄𝐉𝐀 😍❤️‍🩹 𝐘𝐀 𝐐𝐔𝐈𝐄𝐑𝐎 𝐕𝐄𝐑 𝐅𝐎𝐓𝐎𝐒 𝐃𝐄 𝐌𝐈𝐒 𝐒𝐎𝐁𝐑𝐈𝐍𝐎𝐒🥺*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
