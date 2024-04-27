
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `*< 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 - 𝙎𝙋𝙊𝙏𝙄𝙁𝙔 >*\n\n*😻 𝙃𝙖𝙘𝙚 𝙛𝙖𝙡𝙩𝙖 𝙚𝙡 𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙙𝙚 𝙎𝙥𝙤𝙩𝙞𝙛𝙮.*\n\n*😼 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:* _${usedPrefix + command} Good Feeling - Flo Rida_`;
  try {
    const res = await fetch(global.API('CFROSAPI', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('CFROSAPI', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('CFROSAPI', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = ` _*< DESCARGAS - SPOTIFY />*_\n\n`
        spotifyi += ` ▢ *Título:* ${spty.title}\n\n`
        spotifyi += ` ▢ *Artista:* ${spty.artist}\n\n`
        spotifyi += ` ▢ *Álbum:* ${spty.album}\n\n`                 
        spotifyi += ` ▢ *Publicado:* ${spty.year}\n\n`   
        spotifyi += `*🧭 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙚𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤. 𝙚𝙨𝙥𝙚𝙧𝙚..*`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '_*< 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 - 𝙎𝙋𝙊𝙏𝙄𝙁𝙔 />*_\n\n*😨 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧. 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 𝙢𝙖𝙨 𝙩𝙖𝙧𝙙𝙚.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;
