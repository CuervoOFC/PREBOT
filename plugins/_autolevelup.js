/* 
 > Grupo Cuervo-Team-Supreme 
 ** https://chat.whatsapp.com/BirtaUEbtvR6sWjCvBbEXc
 > Canal Bots Cuervo-Team-Supreme 
 ** https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u
 HAJIME-BOT CREADO POR CUERVO-TEAM-SUPREME 
 RESPETEN LOS CREDITOS MALPARIDAS
 SI VEMOS COPIA MOS DAMOS TODO EL DERECHO A INSULTAR Y DE MAS A LA PERSONA QUE ROBO
*/
//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
*▢ SUBISTE DE NIVEL*

 *${before}* ‣  *${user.level}*
 Rango : *${user.role}*
`.trim())
    }
} 

