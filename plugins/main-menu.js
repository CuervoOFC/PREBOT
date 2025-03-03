
let handler = async function (m, { conn, text, usedPrefix }) {
  
let name2 = conn.getName(m.sender)
  
let menuxd = `
> ╭━━━━━━━✦✗✦━━━━━━━━
> ┋✣➸ Hola?? ${name2}
> ┋✣➸ Tenemos Diversos 
> ┋✣➸ Menus En Los 
> ┋✣➸ Botones Escoja 
> ╰◆━━━━━━◆❃◆━━━━━━◆
> ╭─────────────⦁
> │ ‣ ︎  *Opciones* 
> │ 
> │ ‣ ︎  ${usedPrefix}menucompleto 
> │ ‣ ︎  ${usedPrefix}menu2
> │ ‣ ︎  ${usedPrefix}menu3
> │ ‣ ︎  ${usedPrefix}support 
> │ ‣ ︎  ${usedPrefix}botinfo
> │ ‣ ︎  ${usedPrefix}owner
> ╰─────────────⦁
`
    let pp = 'https://files.catbox.moe/igw4cd.jpg' 
    conn.sendButton2(m.chat, menuxd, mssg.ig, pp, [
      ['♧ Menu Principal', `${usedPrefix}menucompleto`],
      ['♤ Menu Audios', `${usedPrefix}menu2`],
      ['☆ Menu Horny', `${usedPrefix}menu3`],
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}support`]
    ],m, rcanal)
    //conn.sendFile(m.chat, pp, 'menu.jpg', menuxd, m, null, rpl)
   
}

handler.help = ['menubotones']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 

export default handler
