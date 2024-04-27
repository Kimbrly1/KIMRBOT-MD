import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙎𝙚 𝙃𝙖 𝙋𝙧𝙤𝙢𝙤𝙫𝙞𝙙𝙤 𝙐𝙣 𝙉𝙪𝙚𝙫𝙤 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧.\n\n`;
    txt1 += `*𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt1 += `*𝙉𝙪𝙚𝙫𝙤 𝘼𝙙𝙢𝙞𝙣:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*𝙇𝙚 𝘿𝙞𝙤 𝘼𝙙𝙢𝙞𝙣:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙎𝙚 𝙃𝙖 𝘿𝙚𝙨𝙜𝙧𝙖𝙙𝙖𝙙𝙤 𝙃𝙖 𝙐𝙣 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧.\n\n`;
    txt2 += `*𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt2 += `*𝙎𝙚 𝙌𝙪𝙞𝙩𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙎𝙚 𝙃𝙖 𝙄𝙣𝙘𝙤𝙧𝙥𝙤𝙧𝙖𝙙𝙤 𝘼𝙡 𝙂𝙧𝙪𝙥𝙤 𝙐𝙣 𝙉𝙪𝙚𝙫𝙤 𝙈𝙞𝙚𝙢𝙗𝙧𝙤.\n\n`;
    txt3 += `*𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*𝙎𝙚 𝘼𝙣𝙖𝙙𝙞𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*𝙎𝙚 𝘼𝙣𝙖𝙙𝙞𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙎𝙚 𝙃𝙖 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝘼 𝙐𝙣 𝙈𝙞𝙚𝙢𝙗𝙧𝙤 𝘿𝙚𝙡 𝙂𝙧𝙪𝙥𝙤.\n\n`;
    txt4 += `*𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*𝙎𝙚 𝙀𝙡𝙞𝙢𝙞𝙣𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = '𝙎𝙖𝙡𝙞𝙙𝙤';
    } else {
      ax = '𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤:';
    }
    let txt5 = `𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙎𝙚 𝙃𝙖 ${ax} 𝙐𝙣  𝙈𝙞𝙚𝙢𝙗𝙧𝙤 𝘿𝙚𝙡 𝙂𝙧𝙪𝙥𝙤.\n\n`;
    txt5 += `*𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (ax === '𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤') {
      txt5 += `*𝙎𝙚 𝙀𝙡𝙞𝙢𝙞𝙣𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*𝙎𝙚 𝙎𝙖𝙡𝙞𝙤:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = '𝘾𝙚𝙧𝙧𝙖𝙙𝙤';
    } else {
      accion = '𝘼𝙗𝙞𝙚𝙧𝙩𝙤';
    }
    let txt6 = `𝙎𝙚 𝙃𝙖 𝙍𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙐𝙣𝙖 𝙉𝙪𝙚𝙫𝙖 𝘾𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣 𝘼𝙡 𝙂𝙧𝙪𝙥𝙤.\n\n`;
    txt6 += `*𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt6 += `*𝙀𝙡 𝙂𝙧𝙪𝙥𝙤 𝙎𝙚 𝘼:* ${'```' + accion + '```'}\n`;
    txt6 += `*𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `𝙎𝙚 𝙃𝙖 𝘾𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙀𝙡 𝙉𝙤𝙢𝙗𝙧𝙚 𝘿𝙚𝙡 𝙂𝙧𝙪𝙥𝙤.\n\n`;
    txt7 += `*𝙉𝙪𝙚𝙫𝙤 𝙉𝙤𝙢𝙗𝙧𝙚:* ${'```' + groupName + '```'}\n`;
    txt7 += `*𝙍𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
}
