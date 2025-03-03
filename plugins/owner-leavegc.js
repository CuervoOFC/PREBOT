let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `《✧》 *Ai Yaemori* Abandona El Grupo, Fué Genial Estar Aquí`, m, rcanal) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`, m, rcanal) 
return console.log(e)
}}
handler.command = ['leave', 'leavegc', 'salir']
handler.group = true
handler.rowner = true
export default handler
