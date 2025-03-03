import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': '𝐀𝐜𝐞𝐫𝐜𝐚 𝐃𝐞',
  'bebot': '𝐒𝐮𝐛 𝐁𝐨𝐭𝐬',
  'game': '𝐉𝐮𝐞𝐠𝐨𝐬',
  'econ': '𝐋𝐯𝐥 & 𝐄𝐜𝐨𝐧.',
  'rg': '𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐨',
  'sticker': '𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬',
  'img': '𝐈𝐦𝐚𝐠𝐞𝐧𝐞𝐬',
  'maker': '𝐌𝐚𝐫𝐤𝐞𝐫',
  'prem': '𝐏𝐫𝐞𝐦𝐢𝐮𝐦',
  'group': '𝐆𝐫𝐮𝐩𝐨𝐬',
  'nable': '𝐎𝐧/𝐎𝐟𝐟 𝐎𝐩𝐜𝐢𝐨𝐧', 
  'nime': '𝐀𝐧𝐢𝐦𝐞',
  'rnime': '𝐀𝐧𝐢𝐦𝐞 𝐑𝐞𝐚𝐜𝐜𝐢𝐨𝐧',
  'dl': '𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬',
  'search': '𝐒𝐞𝐚𝐫𝐜𝐡',
  'tools': '𝐓𝐨𝐨𝐥𝐬',
  'fun': '𝐅𝐮𝐧',
  'cmd': '𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞',
  'nsfw': '𝐍𝐬𝐟𝐰 +𝟏𝟖',
  'ansfw': '𝐍𝐬𝐟𝐰 𝐀𝐧𝐢𝐦𝐞', 
  'owner': '𝐎𝐰𝐧𝐞𝐫', 
  'advanced': '𝐀𝐯𝐚𝐧𝐳𝐚𝐝𝐨',
}

const defaultMenu = {
  before: `╭𝆭͡ᯭ۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ͜▭𝆭͡ᯭ̸۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ͜▭𝆭͡ᯭ̸۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ͜▭𝆭͡ᯭ̸۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ͜▭𝆭͡ᯭ̸۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ͜▭𝆭͡ᯭ̸۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ𝆭͜͡ᯭ̸̸۪۪۪ٜ͜▭𝆭͡ᯭ̸۪۪۪ٜ͜▬𝆭͡ᯭ̸۪۪۪ٜ͜╮
ㅤㅤ  ㅤ   ㅤ  ⋱ㅤㅤ⁝ㅤㅤ⋰  ㅤㅤㅤㅤㅤㅤ
       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ 𝄄  ᩫᩞ̷̸𝄄ㅤ  ╭ֹ┈ ⵿❀⵿ ┈╮
“ Hola *%name* soy *Hajime┃ᴮᴼᵀ*, %greeting ”
𓆩࣪۬★࣪࣪۬︵࣪࣪࣪۬᷼⏜݊࣪࣪۬᷼✿⃘𐇽۫ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪۬۬۬࣪࣪࣪۬۬۬꙰𝇈ٜٜ𐇽࣪࣪࣪࣪࣪۬۬࣪࣪࣪۬۬࣪࣪࣪࣪࣪۬۬࣪࣪࣪۬ 𝇈⃘۫ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪۬۬۬࣪࣪࣪۬۬۬꙰✿݊࣪࣪۬᷼⏜࣪࣪࣪۬᷼︵࣪࣪۬★࣪۬𓆪

╭ ۪۪۪۪۪۪۪┅┉┄:⬤ֹٜٜ━︭⫶ٜٜٜٜٜ𝆋݀݀݀݀݀݀⬬̤ٜٜٜٜٜٜٜٜٜ݅۬۬݅۬۬۬۬۬𝆅  ̤ٜٜٜٜٜٜٜٜٜ𝆋݅۬۬۬۬۬𝆆⬬⫶ٜٜٜٜٜ━ֹٜٜ︭⬤ֹ:┄-┄┅┅╮
│❂꙰⃢  𝅼𝆊𝆆𝆫𝆠➛ ‹‹ *Hello* :: *%name*
│ ׅ ̸̷͂ 𝘾𝐮𝐞𝐫̶̸̸̤𝐯𝐨 ☨ 𝙏̶꯭𝚎꯭𝚊꯭𝚖 ׁ ׅ𓅋̷̷̸̸̶᳟͈
╰━┅┄┉⬤ֹٜٜ━︭⫶ٜٜٜٜٜ𝆋݀݀݀݀݀݀-⬬̤ٜٜٜٜٜٜٜٜٜ݅۬۬݅۬۬۬۬۬𝆅  ̤ٜٜٜٜٜٜٜٜٜ𝆋݅۬۬۬۬۬𝆆⬬⫶ٜٜٜٜٜ━ֹٜٜ︭⬤ֹ┄┅┅━╯

╭⿻⃟ᦈͮิ═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆═⃪᪶̿͆ɞͮิ⃟⿻╮
 ᳯ⃞ 𑪏𑪋ᩧ✿𝆬﹕ྀི.ྀི [ *Modo* :: *Público* ]
 ᳯ⃞ 𑪏𑪋ᩧ✿𝆬﹕ྀི.ྀི [ *Baileys* :: *Multi Device* ]
 ᳯ⃞ 𑪏𑪋ᩧ✿𝆬﹕ྀི.ྀི [ *Tiempo Activo* :: *%muptime* ]
 ᳯ⃞ 𑪏𑪋ᩧ✿𝆬﹕ྀི.ྀི [ *Usuarios* :: *%totalreg* ]
 ᳯ⃞ 𑪏𑪋ᩧ✿𝆬﹕ྀི.ྀི [ *Rol* :: *%role* ]
╰⿻⃟ᦈͮิ═⃪̳̫⃛ؖؖؖؖ═⃪̳̫⃛═⃪̳̫⃛ؖؖؖؖؖؖ═⃪̳̫⃛═⃪̳̫⃛ؖؖؖؖؖؖؖؖ═⃪̳̫⃛═⃪̳̫⃛ؖؖؖؖؖؖؖؖؖؖ═⃪̳̫⃛═⃪̳̫⃛ؖؖؖؖؖؖؖؖ═⃪̳̫⃛═⃪̳̫⃛ؖؖؖؖؖؖ═⃪̳̫⃛═⃪̳̫⃛ؖؖؖؖ═⃪̳̫⃛ɞͮิ⃟⿻╯
%readmore
◂⭒꙰⪼ֵֹ┄ִֺ⦁۬۬┅ֵֹ⬤ֹٜٜ━︭⫶ٜٜٜٜٜ𝆋݀݀݀݀݀݀⬬̤ٜٜٜٜٜٜٜٜٜ݅۬۬݅۬۬۬۬۬𝆅  ̤ٜٜٜٜٜٜٜٜٜ𝆋݅۬۬۬۬۬𝆆⬬⫶ٜٜٜٜٜ━ֹٜٜ︭⬤ֹ┅ֹֽ⦁ֵ۬۬┄ֵֹ⪻⭒꙰▸
`.trimStart(),
  header: '╭ ۪۪۪۪۪۪۪┅┉┄┄◂⫹Hajime┃ᴮᴼᵀ⫺▸┄┄┅┅╮\n│❂꙰⃢  𝅼𝆊𝆆𝆫𝆠➛ *Category* :: *%category*\n│ ׅ ̸̷͂ 𝘾𝐮𝐞𝐫̶̸̸̤𝐯𝐨 ☨ 𝙏̶꯭𝚎꯭𝚊꯭𝚖 ׁ ׅ𓅋̷̷̸̸̶᳟͈\n╰✶┈┈┈┈┈✶┈┈┈┈┈✶┈┈┈➤',
    body: '│➛ %cmd %isdiamond %isPremium\n',
   footer: '╰━┅┉┄┄┄┄┄┄┄┄┄┄┄┅┅━╯\n',
    after: `> ┅̬̬̬̬̬̬̬̬̬̬ᯭ ۪۪۪۪۪۪۪͜͡┅̬̬̬̬̬̬̬̬̬̬ᯭ┅̬̬̬̬̬̬̬̬̬̬ᯭ ۪۪۪۪۪۪۪͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪𝆭͜͡┅ᯭ ۪۪۪۪۪۪۪͜͡┅̬̬̬̬̬̬̬̬̬̬ᯭ ۪۪۪۪۪۪۪͜͡┅̬̬̬̬̬̬̬̬̬̬ᯭ ۪۪۪۪۪۪۪͜͡┅̬̬̬̬̬̬̬̬̬̬ᯭ\n`,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? 'Hajime Main' : `Hajime OFC https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.coin ? '`( ⓓ )`' : '')
                .replace(/%isPremium/g, menu.premium ? '`( ︎Ⓟ )`' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, role, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let img = `https://files.catbox.moe/igw4cd.jpg`
    let txtex = 'Mas Opciones'
    await m.react('🇯🇵')
   // await conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })
    await conn.sendFile(m.chat, img, 'thumbnail.jpg', text.trim(), fkontak, null, rcanal)
   //await conn.sendAi(m.chat, botname, packname, text.trim(), img, img, fgcanal, estilo)
   
    await conn.sendMessage(m.chat, {
      caption: txtex,
      footer: author,
      buttons: [
        {
          buttonId: `/ping`,
          buttonText: {
            displayText: 'PING',
          },
        },
        {
          buttonId: `/owner`,
          buttonText: {
            displayText: 'OWNER',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: m })

  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menucompleto', 'helpcomplete', 'menúcommpleto'] 
handler.register = true 
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'una linda noche 🌙'; break;
  case 1: hour = 'una linda noche 💤'; break;
  case 2: hour = 'una linda noche 🦉'; break;
  case 3: hour = 'una linda mañana ✨'; break;
  case 4: hour = 'una linda mañana 💫'; break;
  case 5: hour = 'una linda mañana 🌅'; break;
  case 6: hour = 'una linda mañana 🌄'; break;
  case 7: hour = 'una linda mañana 🌅'; break;
  case 8: hour = 'una linda mañana 💫'; break;
  case 9: hour = 'una linda mañana ✨'; break;
  case 10: hour = 'un lindo dia 🌞'; break;
  case 11: hour = 'un lindo dia 🌨'; break;
  case 12: hour = 'un lindo dia ❄'; break;
  case 13: hour = 'un lindo dia 🌤'; break;
  case 14: hour = 'una linda tarde 🌇'; break;
  case 15: hour = 'una linda tarde 🥀'; break;
  case 16: hour = 'una linda tarde 🌹'; break;
  case 17: hour = 'una linda tarde 🌆'; break;
  case 18: hour = 'una linda noche 🌙'; break;
  case 19: hour = 'una linda noche 🌃'; break;
  case 20: hour = 'una linda noche 🌌'; break;
  case 21: hour = 'una linda noche 🌃'; break;
  case 22: hour = 'una linda noche 🌙'; break;
  case 23: hour = 'una linda noche 🌃'; break;
}
  var greeting = "espero que tengas " + hour;
