 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u
▢ Grupo
https://chat.whatsapp.com/BirtaUEbtvR6sWjCvBbEXc
▢ Enlaces
${fgig}
▢ GitHub 
${fgcanal}
▢ Soporte 
wa.me/5213318360934
◈ ━━━━━━━━━━━━━━━━━━━━ ◈`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
