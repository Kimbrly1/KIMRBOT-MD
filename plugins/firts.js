export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`⚠👽 Hey Humeno.. ${username}¡!
 *${saludo}*

*⚠️ Nota:* *No Esta Permitido Escribirme Por Privado*
⚡️ Escriba !menu Para Ver Los Comandos Que Dispongo!

*⚡ Si Tienes Duda O Sugerencia Contacta A Mi Creador: 🌴*
👑 Wa.me/593992402778 ⚡`)

user.pc = new Date * 1
}
