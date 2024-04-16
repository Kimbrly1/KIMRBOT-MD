import fetch from 'node-fetch'

let handler = async (m, { conn, text, args }) => {
        if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙖𝙠𝙥 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧`
        let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=nktesla&q={enc}`)
let gPlay = await json.json()
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎: ${gPlay.titulo}
🧬 𝙄𝘿𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍: ${gPlay.id}
⛓️ 𝑬𝑵𝑳𝑨𝑪𝑬: ${gPlay.link}
🖼️ 𝑰𝑴𝑨𝑮𝑬𝑵: ${gPlay.imagen}
✍️ 𝑫𝑬𝑺𝑨𝑹𝑹𝑶𝑳𝑳𝑨𝑫𝑶𝑹: ${gPlay.desarrollador}
📜 𝑩𝑰𝑶𝑮𝑹𝑨𝑭𝑰𝑨: ${gPlay.descripcion}
💲 𝑫𝑰𝑵𝑬𝑹𝑶: ${gPlay.moneda}
🎭 𝑮𝑹𝑨𝑻𝑰𝑺?: ${gPlay.gratis}
💸 𝑷𝑹𝑬𝑪𝑰𝑶: ${gPlay.precio}
📈 𝑷𝑼𝑵𝑻𝑼𝑨𝑪𝑰𝑶𝑵: ${gPlay.puntuacion}`},{quoted:m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}  
}

handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i

export default handler 
