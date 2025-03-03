
let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw conn.reply(m.chat, `✳️ ${mssg.reply}`, m, rcanal)
    if (!m.quoted.fileSha256) throw conn.reply(m.chat, `⚠️ ${mssg.reply}`, m, rcanal)
    if (!text) throw conn.reply(m.chat, `✳️ Falta el comando` m, rcanal)
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw conn.reply(m.chat, '⚠️ No tienes permiso para cambiar este comando de Sticker', m, rcanal)
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    conn.reply(m.chat, `✅ ${mssg.cmdSave}`, m, rcanal)
}


handler.help = ['setcmd <text>']
handler.tags = ['cmd']
handler.command = ['setcmd']
handler.rowner = true

export default handler
