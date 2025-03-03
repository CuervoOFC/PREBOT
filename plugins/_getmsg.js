/* 
 > Grupo Cuervo-Team-Supreme 
 ** https://chat.whatsapp.com/BirtaUEbtvR6sWjCvBbEXc
 > Canal Bots Cuervo-Team-Supreme 
 ** https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u
 HAJIME-BOT CREADO POR CUERVO-TEAM-SUPREME 
 RESPETEN LOS CREDITOS MALPARIDAS
 SI VEMOS COPIA MOS DAMOS TODO EL DERECHO A INSULTAR Y DE MAS A LA PERSONA QUE ROBO
*/
export async function all(m) {
    if (!m.chat.endsWith('.net') || m.fromMe || m.key.remoteJid.endsWith('status@broadcast')) return
    if (global.db.data.chats[m.chat].isBanned) return
    if (global.db.data.users[m.sender].banned) return
    if (m.isBaileys) return
    let msgs = global.db.data.msgs
    if (!(m.text in msgs)) return
    let _m = this.serializeM(JSON.parse(JSON.stringify(msgs[m.text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    await _m.copyNForward(m.chat, true)
}
