
let handler = async function (m, { conn, text, usedPrefix }) {
  
let name2 = conn.getName(m.sender)
let menu3 = `
Hola ${name2}
╭─────────────⦁
│╭➟ Un Administrador 
││➟ Debera encender 
││➟ el nsfw con
│╰➟ ${usedPrefix}on nsfw
╰─────────────⦁
╭─────────────⦁
│╭➟ ${usedPrefix}xwaifu
││➟ ${usedPrefix}blowjob
││➟ ${usedPrefix}cum
││➟ ${usedPrefix}hentai 
││➟ ${usedPrefix}yuri
││➟ ${usedPrefix}xneko
││➟ ${usedPrefix}trap
││➟ ${usedPrefix}ass 
││➟ ${usedPrefix}culos
││➟ ${usedPrefix}boobs 
││➟ ${usedPrefix}boobies
││➟ ${usedPrefix}pussy
││➟ ${usedPrefix}lesbian
││➟ ${usedPrefix}lesbians
││➟ ${usedPrefix}pack
│╰➟ ${usedPrefix}cosplay
╰─────────────⦁
╭─────────────⦁
│╭➟ Buscador XXX 
│╰➟ ${usedPrefix}xnxxdl 
╰─────────────⦁
`
    let pp = 'https://files.catbox.moe/igw4cd.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    //conn.sendFile(m.chat, pp, 'menu.jpg', menu3, m, null, rcanal)
        await conn.sendMessage(m.chat, {
      image: { url: pp },
      caption: menu3,
      footer: botName,
      buttons: [
        {
          buttonId: `/menucompleto`,
          buttonText: {
            displayText: 'MENÚ COMPLETO',
          },
        },
        {
          buttonId: `/menu2`,
          buttonText: {
            displayText: 'MENU AUDIOS',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: m})
   
}

handler.help = ['menuhot']
handler.tags = ['main']
handler.command = ['menu3', 'menuhot', 'labiblia', 'hotmenu'] 

export default handler
