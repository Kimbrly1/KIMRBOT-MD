import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*ꪹ͜𓂃͡𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻...𓏲੭*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ¡𝗛𝗼𝗹𝗮!', body: '𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍𝖫𝗂𝗍𝖾-𝖬𝖣 🌹🌻', sourceUrl: global.channel, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =`╭✦⢄✩*⢄⢁ ✩*⢄✧⡠*✩⡠*✩⡠✦╮
│╭─────────────────
││   「 *INFO USUARIO 🪪*
│├━━━━━━━━━━━━━━━━╯
││•🪪  *Nombre:* ${taguser}
││•🪪 *Nivel:* ${level}
││•🪪 *Exp:* ${exp}
││•🪪 *Pais:* ${nombreLugar}
││
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯
 
 ╭✦⢄✩*⢄⢁ ✩*⢄✧⡠*✩⡠*✩⡠✦╮
│╭─────────────────
││    「 *INFO BOT 🤖*
│├━━━━━━━━━━━━━━━━╯
││•👥 *CREADORES:* Alee.mvp / Sebas.mvp 
││•🕒 *Tiempo Activo:* ${muptime}
││•🗓️ *USUARIOS REGISTRADOS:*${rtotalreg} De ${totalreg}
││•📆 *FECHA:* ${date}
││
╰─ - ✦⢄⢁✩*⢄⢁✧⡠*✩⡈⡠✦ - ─╯

 ╭─❒ 「 *INFORMACIÓN 📄* 」
 │•📄  _*!help*_
 │•📄 _*!allmenu*_
 │•📄 _*!owner*_
 │•📄 *_!contacto_*
 │•📄 *_!creador_*
 │•📄 *_!contactos_*
 │•📄 *_!tqto>_*
 │•📄 *_!creditos_*
 │•📄 *_!credits_*
 │•📄 *_!thanks_*
 │•📄  *_!thanksto_*
 │•📄 *_!cuentasoficiales_*
 │•📄 *_!cuentasofc_* 
 │•📄 *_!cuentas_*
 │•📄 *_!grupos_*
 │•📄 *_!dash_*
 │•📄 *_!dashboard_*
 │•📄 *_!views_*
 │•📄  *_!database_*
 │•📄  *_!usuarios>_*
 │•📄  *_!user_*
 │•📄 *_!donar_*
 │•📄 *_!donate_*
 │•📄 *_!donasi_*
 │•📄 *_!groups_*
 │•📄 *_!grouplist_*
 │•📄 *_!infobot_*
 │•📄 *_!script_*
 ╰───────────

 ╭─❒ 「 *GRUPOS 👥* 」
 │•👥 *_!add_*
 │•👥 *_!admins_*
 │•👥 *_!aprobar_*
 │•👥 *_!group open / close_**
 │•👥 *_!grupo abrir / cerrar_*
 │•👥 *_!demote_*
 │•👥 *_hidetag_*
 │•👥 *_!idgc_*
 │•👥 *_!infogrupo_*
 │•👥 *_!kick_*
 │•👥 *_!link_*
 │•👥 *_!listanum_*
 │•👥 *_!kicknum_*
 │•👥 *_!promote_*
 │•👥 *_!revoke_*
 │•👥 *_!setbye_*
 │•👥 *_!setdesc_*
 │•👥 *_!setname_*
 │•👥 *_!setpp_*
 │•👥 *_!setppgc_*
 │•👥 *_!setppgroup_*
 │•👥 *_!setwelcome_*
 │•👥 *_!simulate_*
 │•👥 *_!tagall_*
 ╰───────────

 ╭─❒ 「 *JUEGOS 🎮* 」
 │ •🎮 *_!love_*
 │ •🎮 *_!suerte_*
 │ •🎮 *_!ruleta_*
 │ •🎮 *_!ruletas_*
 │ •🎮 *_!acertijo_*
 │ •🎮 *_!acert_*
 │ •🎮 *_!adivinanza_*
 │ •🎮 *_!tekateki_*
 │ •🎮 *_!advpe_*
 │ •🎮 *_!adv_*
 │ •🎮 *_!película_*
 │ •🎮  *_!películas_*
 │ •🎮  *_!cancion_*
 │ •🎮  *_!delttt_*
 │ •🎮  *_!delttc_*
 │ •🎮  *_!delxo_*
 │ •🎮  *_!doxear_*
 │ •🎮  *_!doxeo_*
 │ •🎮  *_!doxxeo_*
 │ •🎮  *_!gay_*
 │ •🎮  *_!los10_*
 │ •🎮  *_!mates_*
 │ •🎮  *_!personalidad_*
 │ •🎮  *_!pregunta_*
 │ •🎮  *_!reto_*
 │ •🎮  *_!fap_*
 │ •🎮  *_!ship_*
 │ •🎮  *_!simi_*
 │ •🎮  *_!slot_*
 │ •🎮  *_!buscarpalabra_*
 │ •🎮  *_!sopa_*
 │ •🎮  *_!soup_*
 │ •🎮  *_!spdepalabras_*
 │ •🎮  *_!tictactoe_*
 │ •🎮  *_!topgays_*
 │ •🎮  *_!topotakus_*
 │ •🎮  *_!topheteros_*
 ╰───────────

 ╭─❒ 「 *DESCARGAS 🚀* 」
│ •🚀  *_!instagram<enlace / link / url>_*
│ •🚀  *_!mediafire *<enlace / link / url>_*
│•🚀  *_gitclone *<enlace / link / url>_*
│•🚀  *_!gdrive *<enlace / link / url>_*
│•🚀  *_!tiktok <enlace / link / url>_*
│•🚀  *_!tiktokimg *<enlace / link/ url>_*
│•🚀  *_!xnxxdl *<enlace / link / url>_*
│•🚀  *_!xvideosdl *<enlace / link / url>_*
│•🚀  *_!twitter *<enlace / link / url>_*
│•🚀  *_!fb *<enlace / link / url>_*
│•🚀  *_!ytshort *<enlace / link / url>_*
│•🚀  *_!ytmp3 *<enlace / link / url>_*
│•🚀  *_!ytmp4 *<enlace / link / url>_*
│•🚀  *_!ytmp3doc *<enlace / link / url>_*
│•🚀  *_!ytmp4doc *<enlace / link / url>_*
│•🚀  *_!videodoc *<enlace / link / url>_*
│•🚀  *_!dapk2 *<enlace / link / url>_*
│•🚀  *_!stickerpack *<enlace / link / url>_*
│•🚀  *_!play *<texto>_*
│•🚀  *_!play2 *<texto>_*
│•🚀  *_!play.1 *<texto>_*
│•🚀  *_!play.2 *<texto>_*
│•🚀  *_!playdoc *<texto>_*
│•🚀  *_!playdoc2 *<texto>_*
│•🚀  *_!playlist *<texto>_*
│•🚀  *_!spotify *<texto>_*
│•🚀  *_!ringtone *<texto>_*
│•🚀  *_!soundcloud *<texto>_*
│•🚀  *_!imagen *<texto>*
│•🚀  *_!pinterest *<texto>_*
│•🚀  *_!wallpaper *<texto>_*
│•🚀  *_!pptiktok *<nombre de usuario>_*
│•🚀  *_!igstalk *<nombre de usuario>_*
│•🚀  *_!igstory *<nombre de usuario>_*
│•🚀  *_!tiktokstalk *<username>_*
 ╰───────────

 ╭─❒ 「 *❌️Enable / Disable ✅️* 」
 │•✅️  *_!enable_*
 │•❌️  *_!disable_*
 ╰───────────

 ╭─❒ 「 *Buscadores 🔎* 」
│•🔎 *_!githubsearch <texto>_*
│•🔎 *_!modapk <texto>_*
│•🔎 *_!stickersearch <texto>_*
│•🔎 *_!stickersearch2 <texto>_*
│•🔎 *_!xnxxsearch <texto>_*
│•🔎 *_!animeinfo  <texto>_*
│•🔎 *_!google  <texto>_*
│•🔎 *_!letra  <texto>_*
│•🔎 *_!wikipedia  <texto>_*
│•🔎 *_!ytsearch <texto>_*
│•🔎 *_!playstore <texto>_*
 ╰───────────

 ╭─❒ 「  *CONVERTIDORES🔊* 」
│•🔊 *_!toanime <imagen>_*
│•🔊 *_!togifaud <video>_*
│•🔊 *_!toimg <sticker>_*
│•🔊 *_!tomp3 <video>_*
│•🔊 *_!tomp3 <nota de voz>_*
│•🔊 *_!toptt <video / audio>_*
│•🔊 *_!tovideo <sticker>_*
│•🔊 *_!tourl <video / imagen / audio>_*
│•🔊 *_!tts <idioma> <texto>_*
│•🔊 *_!tts <efecto> <texto>_*
 ╰───────────

 ╭─❒ 「 *STICKERS 🧩* 」
 │•🧩  _*!sticker <responder a imagen o video>*_
 │•🧩 _*!sticker <enlace / link / url>*_
 │•🧩 _*!sticker2 <responder a imagen o video>*_
 │•🧩 _*!sticker2 <enlace / link / url>*_
 │•🧩 _*!s <responder a imagen o video>*_
 │•🧩 _*!s <enlace / link / url>*_
 │•🧩 _*!emojimix <emoji 1>&<emoji 2>*_
 │•🧩 _*!scircle <imagen>*_
 │•🧩 _*!sremovebg <imagen>*_
 │•🧩 _*!semoji <tipo> <emoji>*_
 │•🧩 _*!qc <texto>*_
 │•🧩 _*!attp <texto>*_
 │•🧩 _*!attp2 <texto>*_
 │•🧩 _*!attp3 <texto>*_
 │•🧩 _*!ttp <texto>*_
 │•🧩 _*!ttp2 <texto>*_
 │•🧩 _*!ttp3 <texto>*_
 │•🧩 _*!ttp4 <texto>*_
 │•🧩 _*!ttp5 <texto>*_
 │•🧩 _*!pat <@tag>*_
 │•🧩 _*!slap <@tag>*_
 │•🧩 _*!kiss <@tag>*_
 │•🧩 _*!dado*_
 │•🧩 _*!wm <packname> <author>*_
 │•🧩 _*!stickermarker <efecto> <imagen>*_
 │•🧩 _*!stickerfilter <efecto> <imagen>*_
 ╰─────────────

 ╭─❒ 「 *RPG 💰* 」
 │•💰 *_!adventure_*
 │•💰 *_!cazar_*
 │•💰 _*!cofre*_
 │•💰 *_!balance_*
 │•💰 *_!claim_*
 │•💰 *_!heal_*
 │•💰 *_lb_*
 │•💰 *_!levelup_*
 │•💰 *_!myns_*
 │•💰 *_!perfil_*
 │•💰 *_!work_*
 │•💰 _*!minar*_
 │•💰 *_!minar2_*
 │•💰 *_!buy_*
 │•💰 *_!buyall_*
 │•💰 *_!verificar_*
 │•💰 *_!robar <cantidad> <@tag>_*
 │•💰 *_!transfer <tipo> <cantidad> <@tag>*_
 │•💰 _! *unreg <numero de serie>*_
 ╰───────────

 ╭─❒ 「 *Audios - Efectos 🎶* 」
│•🎤 *𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰*
│•🎤 *_!bass_*
│•🎤 *_!blown_*
│•🎤 *_!deep_*
│•🎤 *_!earrape_*
│•🎤 *_fast_*
│•🎤 *_!fat_*
│•🎤 *_!nightcore_*
│•🎤 *_!reverse_*
│•🎤 *_!robot_*
│•🎤 _*!slow*_
│•🎤 _*!smooth*_
│•🎤 *_!tupai_*
 ╰───────────

 ╭─❒ 「 *Herramientas 🧰* 」
 │•🧰 *_!acortar_*
 │•🧰 *_!delete_*
 │•🧰 *_!dropmail_*
 │•🧰 *_!fake_*
 │•🧰 *_!readviewonce_*
 │•🧰 *_!nowa_*
 │•🧰 *_!qrcode_*
 │•🧰 *_!spoiler_*
 │•🧰 *_!readqr_*
 │•🧰 *_!style_*
 │•🧰 *_!traducir_*
 │•🧰 *_!codesidiomas_*
 ╰───────────

 ╭─❒ 「 *Anime 📍* 」
 │•📍 *_!animelink_*
 │•📍 *_!fanart_*
 │•📍 *_!husbu_*
 │•📍 *_!kanna_*
 │•📍 *_!megumin_*
 │•📍 *_!neko_*
 │•📍 *_!shota_*
 │•📍 *_!waifu_*
 │•📍 *_!elaina_*
 │•📍 *_!animeinfo_*
 │•📍 *_!lolice_*
 ╰───────────


 ╭─❒ 「 *Inteligencia Artificial 🙋🏻‍♂️* 」
 │•🙋🏻‍♂️ *_!bard_*
 │•🙋🏻‍♂️ *_!bardimg_*
 │•🙋🏻‍♂️ *_!dalle_*
 │•🙋🏻‍♂️ *_!dall2_*
 │•🙋🏻‍♂️ *_!hd_*
 │•🙋🏻‍♂️ *_!openia_*
 │•🙋🏻‍♂️ *_!chatgpt_*
 │•🙋🏻‍♂️ *_!ia_*
 ╰───────────

 ╭─❒ 「 *Imagenes 🖼️* 」
 │•🖼️ *_!gimage_*
 │•🖼️ *_!imagen_*
 │•🖼️ *_!pinterest_*
 ╰───────────

 ╭─❒ 「 *OWNER👑* 」
 │• 👑 *_!menuowner_*
 ╰───────────

 ╭─❒ 「 *BOT 🤖* 」
 │•🤖  *_!cuentas_*
 │•🤖  *_!saludo_*
 │•🤖  *_!velocidad_*
 │•🤖  *_!metodo_*
 │•🤖  *_!instalarbot_*
 │•🤖  *_!terminosycondiciones_*
 │•🤖  *_!grupos_*
 │•🤖  *_!estado_*
 │•🤖  *_!aprender_*
 │•🤖  *_!infobot_*
 │•🤖  *_!speedtest_*
 │•🤖  *_!donar_*
 │•🤖  *_!owner_*
 │•🤖  *_!contactos_*
 │•🤖  *_!database_*
 │•🤖  *_!colaboradores_*
 │•🤖  *_!script_*
 │•🤖  *_Bot_*
 ╰───────────

 ╭─❒ 「 *DATABASE 📑* 」
 │•📑 *_!totalf_*
 │•📑 *_!setcmd_*
 │•📑 *_!delcmd_*
 │•📑 *_!listcmd_*
 ╰───────────

 ╭─❒ 「 *FRASES 💌* 」
 │•💌 *_!consejo_*
 │•💌 *_!oracion_*
 │•💌 *_!piropo_*
 │•💌 *_!refran_*
 ╰───────────

 ╭─❒ 「 *COMANDOS 🔞* 」
 │•🔞 *_Labiblia_* 
 ╰───────────`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌹⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🌸⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🧩');
  } catch {
    conn.reply(m.chat, '🧸 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|allmenu|help|menucompleto)$/i;
handler.register = true
export default handler;