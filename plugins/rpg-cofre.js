const handler = async (m, {isPrems, conn}) => {
  const time = global.db.data.users[m.sender].lastcofre + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `😏 𝙔𝙖 𝙊𝙗𝙩𝙪𝙫𝙞𝙨𝙩𝙚𝙨 𝙏𝙪 𝘾𝙤𝙛𝙧𝙚\n 𝙑𝙪𝙚𝙡𝙫𝙚 𝙀𝙣: *${msToTime(time - new Date())}* 𝙋𝙖𝙧𝙖 𝙑𝙤𝙡𝙫𝙚𝙧 𝘼 𝙍𝙚𝙘𝙡𝙖𝙢𝙖𝙧`;

  const img = 'https://telegra.ph/file/62ba6688963b0ad407edd.png';
  const dia = Math.floor(Math.random() * 30);
  const tok = Math.floor(Math.random() * 10);
  const mystic = Math.floor(Math.random() * 4000);
  const expp = Math.floor(Math.random() * 5000);

  global.db.data.users[m.sender].limit += dia;
  global.db.data.users[m.sender].money += mystic;
  global.db.data.users[m.sender].joincount += tok;
  global.db.data.users[m.sender].exp += expp;

  const texto = `
╔══✨═✨═✨══⬣
║🧸 𝙊𝙗𝙩𝙞𝙚𝙣𝙚𝙨 𝙐𝙣 𝘾𝙤𝙛𝙧𝙚
║ ${saludo}
║┈┈┈┈┈┈┈┈┈┈┈┈┈
║ *${dia} 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨* 💎
║ *${tok} 𝙏𝙤𝙠𝙚𝙣𝙨* 🪙
║ *${mystic} 𝙔𝙚𝙧𝙖𝙮𝘾𝙤𝙞𝙣𝙨* 💸
║ *${expp} 𝙀𝙭𝙥* ⚡
╚═════════════════⬣`;

  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };

  await conn.sendFile(m.chat, img, 'mystic.jpg', texto, fkontak);
  // await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'];
handler.level = 5;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}
