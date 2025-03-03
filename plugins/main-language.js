
let handler = async (m, { conn, text, args, usedPrefix, fgcanal, command }) => {
	
  let te = `✳️ ${mssg.langList}\n- es (Español)\n- en (Inglés)\n- id (Indonesia)\n- pt (Portugues)\n- ar (Árabe)\n\n📌 ${mssg.example}: *${usedPrefix + command}* en`
  if (!text) throw conn.sendButton2(m.chat, te, mssg.ig, fglog, [
      ['♧ Idioma Español', `${usedPrefix}lang es`],
      ['♤ Linguagem Português', `${usedPrefix}lang pt`],
      ['☆ English language', `${usedPrefix}lang en`],
      ['⏍ اللغة العربية', `${usedPrefix}lang ar`],
      ['⌬ bahasa Indo', `${usedPrefix}lang id`]
    ], m, rpl)
  let user = global.db.data.users[m.sender]
   if (args[0] === "es") {
       user.language = args[0]
       m.reply("✅ *Español Seleccionado*\n\nAhora el bot responderá a su mensaje en Español", m, rcanal)
      } else if (args[0] === "en") {
       user.language = args[0]
       m.reply("✅ *Selected English*\n\nNow the bot will reply to your message in English", m, rcanal)
      } else if (args[0] === "id") {
      user.language = args[0]
       m.reply("✅ *Bahasa Indonesia terpilih*\n\nSekarang bot akan membalas pesanmu dengan bahasa Indonesia", m, rcanal)
      } else if (args[0] === "pt") {
        user.language = args[0]
         m.reply("✅ *Português selecionados*\n\nAgora o bot vai responder a sua mensagem em Português", m, rcanal)
       } else if (args[0] === "ar") {
        user.language = args[0]
        m.reply("✅ *تم اختيار اللغة العربية*\n\nالآن سيقوم البوت بالرد على رسائلك باللغة العربية", m, rcanal)
      } else {
       m.reply(te, m, rcanal)
     }
    
 }
 handler.help = ['language <es-en..>']
 handler.tags = ['main']
 handler.command = ['language', 'lenguaje', 'lang', 'idioma'] 
 
 export default handler
