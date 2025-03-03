import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
≡ *INFO BOT*
  
*ESTADO*
▢ ${mssg.gp}s: *${groupsIn.length}*
▢ Chats: *${chats.length - groupsIn.length}*
▢ Total Chats: *${chats.length}*

*≡ OWNERS*
  *𝙷𝚊𝚓𝚒𝚖𝚎-𝙱𝚘𝚝 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙲𝚞𝚎𝚛𝚟𝚘-𝚃𝚎𝚊𝚖-𝚂𝚞𝚙𝚛𝚎𝚖𝚎*
  
▢ WhatsApp :    ͟͞ৎ୭̤ᵃᵐ⁻ᵛⁱᵖ𝐓𝐡𝐞 𝐃፝֟͜𝐞𝐯𝐢͜͡𝐥𓏲੭͟͞  
https://wa.me/5213339577315
https://wa.me/5212722801554
▢ WhatsApp :   ͟͞ৎ୭̤ᵃᵐ⁻ᵛⁱᵖki፝֟͜ra͜͡卍𓏲੭͟͞  
https://wa.me/50664399903

▢ Canal WhatsApp:
  • ${fgig}

 *≡ HELPERS*
  *𝐇𝐚𝐣𝐢𝐦𝐞-𝐁𝐨𝐭 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐂𝐮𝐞𝐫𝐯𝐨-𝐓𝐞𝐚𝐦-𝐒𝐮𝐩𝐫𝐞𝐦𝐞*
▢ WhatsApp :    ͟͞ৎ୭̤ᵃᵐ⁻ᵛⁱᵖSu፝֟͜ppo͜͡rt𓏲੭͟͞  
https://wa.me/5493517322733
▢ WhatsApp : ᵃᵐ ᵛⁱᵖ ᴸᴼᴿᴰ𝑀𝐸𝐿𝐼 👑
https://wa.me/55988474-5101
(Es Portugués Pero Habla Español No Teman y Pegrunten)`

conn.sendButton2(m.chat, infobt, mssg.ig, null, [
  ['ꨄ︎ ping', `${usedPrefix}ping`],
   ['⌬ Grupos', `${usedPrefix}support`]
 ], m)
 //m.reply(infobt)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler
