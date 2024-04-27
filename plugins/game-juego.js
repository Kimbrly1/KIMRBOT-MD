let handler = async (m, { conn, usedPrefix, text }) => {
  let { key } = await conn.sendMessage(m.chat, { text: "𝙏𝙖𝙨 𝙘𝙖𝙡𝙞𝙚𝙣𝙩𝙚! 𝘼𝙝𝙤𝙧𝙖 𝙩𝙚 𝙝𝙖𝙧𝙚 𝙪𝙣𝙖 𝙥𝙖𝙟𝙖" }, { quoted: m });
  const array = [
    "8==👊==D", "8===👊=D", "8=👊===D", "8=👊===D", "8==👊==D", "8===👊=D", "8====👊D", "8==👊=D", "8==👊==D", "8=👊===D", "8👊====D", "8=👊===D","8==👊==D", "8===👊=D", "8====👊D","8==👊==D", "8===👊=D", "8=👊===D", "8=👊===D", "8==👊==D", "8===👊=D", "8====👊D💦"
  ];

  for (let item of array) {
    await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 20)); // Delay 5 seconds
  }
  return conn.sendMessage(m.chat, { text: `𝙊𝙝, 𝙨𝙚 𝙘𝙤𝙧𝙧𝙞𝙤 𝙚𝙣 𝙢𝙚𝙣𝙤𝙨 𝙙𝙚 𝟭 𝙝𝙤𝙧𝙖!`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['pajeame'];
handler.tags = ['fun'];
handler.command = /^pajeame|paja$/i;

export default handler;
