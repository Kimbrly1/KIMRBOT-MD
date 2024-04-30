import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
  if (user.registered === true) throw `⚠𝙃𝙚𝙮, 𝘼𝙡𝙩𝙤!! 𝙔𝙖 𝙀𝙨𝙩𝙖𝙨 𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤, 𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙑𝙤𝙡𝙫𝙚𝙧𝙩𝙚 𝙖 𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧?\n\n*⚡𝙋𝙖𝙧𝙖 𝙑𝙤𝙡𝙫𝙚𝙧 𝘼 𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙐𝙨𝙖 𝙀𝙡 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙋𝙖𝙧𝙖 𝘽𝙤𝙧𝙧𝙖𝙧 𝙏𝙪 𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙤* \n\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*⚠️ Mal Uso Del Comando*\n\n*🎁 Uso Del Comando:* 
*${usedPrefix + command} nombre.edad*\n\n*🔍Ejemplo:*
 ${usedPrefix + command} *${name2}.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*📝 𝙀𝙡 𝙉𝙤𝙢𝙗𝙧𝙚 𝙉𝙤 𝙋𝙪𝙚𝙙𝙚 𝙀𝙨𝙩𝙖𝙧 𝙑𝙖𝙘𝙞𝙤 𝘾𝙤𝙢𝙤 𝙏𝙪 𝘾𝙤𝙧𝙖𝙯𝙤𝙣*'
  if (!age) throw '*📝 𝙇𝙖 𝙀𝙙𝙖𝙙 𝙉𝙤 𝙋𝙪𝙚𝙙𝙚 𝙀𝙨𝙩𝙖𝙧 𝙑𝙖𝙘𝙞𝙤 𝘾𝙤𝙢𝙤 𝙏𝙪 𝘾𝙤𝙧𝙖𝙯𝙤𝙣*'
  if (name.length >= 30) throw '*⚠️ 𝙏𝙪 𝙉𝙤𝙢𝙗𝙧𝙚 𝘾𝙤𝙣𝙩𝙞𝙚𝙣𝙚 𝙈𝙪𝙘𝙝𝙖𝙨 𝙇𝙚𝙩𝙧𝙖𝙨*' 
  age = parseInt(age)
  if (age > 100) throw '*👴🏻 𝙒𝙤𝙬, 𝙐𝙣 𝘼𝙗𝙪𝙚𝙡𝙞𝙩𝙤 𝙌𝙪𝙞𝙚𝙧𝙚 𝙅𝙪𝙜𝙖𝙧 𝘼𝙡 𝘽𝙤𝙩'
  if (age < 5) throw '*👀 𝙃𝙖𝙮, 𝙐𝙣 𝘽𝙚𝙗𝙚 𝙅𝙪𝙜𝙖𝙣𝙙𝙤 𝘼𝙡 𝘽𝙤𝙩*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
//m.react('📩') 
await conn.sendMessage(m.chat, { react: { text: '💝', key: m.key } })
let regbot = `╭━ +1 𝐄𝐧 𝐌𝐢 𝐂𝐨𝐫𝐚𝐳𝐨𝐧❤️‍🩹━╮
┃ 🤑𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
┃ 🤤𝐄𝐝𝐚𝐝: ${age} años
┃ 💫𝐍𝐮𝐦𝐞𝐫𝐨 𝐃𝐞 𝐒𝐞𝐫𝐢𝐞:
┃ ${sn}
╰━━━━━━━ ⸙ ━━━━━━━╯`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 💝', }})

}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
