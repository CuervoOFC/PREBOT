let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!args[0]) throw m.reply(`⚠️️ *_Ingrese un texto para iniciar la escuesta._*\n\n📌 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`, m, rcanal)
if (!text.includes('|')) throw  m.reply(`⚠️️ Separe las encuestas con *|* \n\n📌 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`, m, rcanal)
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) {
a.push([b[c]])
                        }
                        return conn.sendPoll(m.chat, `${packname}`, a, m)
}
handler.help = ['encuesta *<text|text2>*']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta'] 
handler.group = true

export default handler
