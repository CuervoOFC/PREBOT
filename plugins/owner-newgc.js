let handler = async (m, { conn, text }) => {
if (!text) return m.reply('🚩 Ingresa un nombre para el grupo.', m, rcanal)
try{
m.reply('🚩 *Creando grupo*', m, rcanal)
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply('https://chat.whatsapp.com/' + url)
} catch (e) {
m.reply(`🚩 Ocurrió un error.`, m, rcanal)
}
}
handler.help = ['grupocrear <nombre>']
handler.tags = ['owner']
handler.command = ['creargc', 'newgc', 'creargrupo', 'grupocrear']
handler.rowner = true
handler.register = true
export default handler
