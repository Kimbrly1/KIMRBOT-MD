const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, reaction, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」*\n
*𝙄𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝘿𝙚𝙡 𝙂𝙧𝙪𝙥𝙤:* 
${groupMetadata.id}

*𝙉𝙤𝙢𝙗𝙧𝙚:* 
${groupMetadata.subject}

*𝙄𝙢𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨:*
${participants.length} Participantes

*𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝘿𝙚𝙡 𝙂𝙧𝙪𝙥𝙤:* 
@${owner.split('@')[0]}

*𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨:*
${listAdmin}

*𝙈𝙤𝙙𝙤𝙨 𝘿𝙚𝙡 𝙂𝙧𝙪𝙥𝙤:*

*Welcome:* ${welcome ? '✅' : '❌'}
*Detect:* ${detect ? '✅' : '❌'} 
*Detect 2:* ${detect2 ? '✅' : '❌'} 
*Antilink:* ${antiLink ? '✅' : '❌'} 
*Antilink 𝟸:* ${antiLink2 ? '✅' : '❌'} 
*Modohorny:* ${modohorny ? '✅' : '❌'} 
*Autosticker:* ${autosticker ? '✅' : '❌'} 
*Audios:* ${audios ? '✅' : '❌'} 
*Antiviewonce:* ${antiviewonce ? '✅' : '❌'} 
*Reacción* ${reaction ? "✅️" : "❌️"}
*Antidelete:* ${antidelete ? '✅' : '❌'} 
*Antitoxic:* ${antiToxic ? '✅' : '❌'} 
*Antitraba:* ${antiTraba ? '✅' : '❌'} 
*Modoadmin:* ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.register = true
handler.group = true;
export default handler;
