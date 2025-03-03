//import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw conn.reply(m.chat, `✳️ Ingrese el nombre del comamdo`, m, rcanal)
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw conn.reply(m.chat, '✳️ No puedes borrar este comando', m, rcanal)
    delete sticker[hash]
    conn.reply(m.chat, `✅ Comando eliminado`, m, rcanal)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <text>')
handler.tags = ['cmd']
handler.command = ['delcmd']
handler.rowner = true

export default handler
