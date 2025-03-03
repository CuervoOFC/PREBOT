
let poin = 200
let cooldown = 15000
let handler = async (m, { conn, args, usedPrefix, command }) => {
      const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';
    let reseqv = `✳️ ${mssg.ppt(usedPrefix, command)}`
    if (!args[0]) throw conn.sendButton2(m.chat, `*𝐏𝐢𝐞𝐝𝐫𝐚 🗿, 𝐏𝐚𝐩𝐞𝐥 📄 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 ✂️*\n\n*—◉  𝙿𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚕𝚘𝚜 𝚋𝚘𝚝𝚘𝚗𝚎𝚜 𝚙𝚊𝚛𝚊 𝚓𝚞𝚐𝚊𝚛 𝚘 𝚝𝚊𝚖𝚋𝚒𝚎𝚗 𝚙𝚞𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:*\n*◉ ${usedPrefix + command} piedra*\n*◉ ${usedPrefix + command} papel*\n*◉ ${usedPrefix + command} tijera*`, packname, pp, [['Piedra 🗿', `${usedPrefix + command} piedra`], ['Papel 📄', `${usedPrefix + command} papel`], ['Tijera ✂️', `${usedPrefix + command} tijera`]], m)
    let text = args[0].toLowerCase()
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastppt < cooldown) throw `⏱️ ${mssg.pptCd} *${msToTime((user.lastppt + cooldown) - new Date())}*`
    if (user.coin < poin) return m.reply(`✳️ ${mssg.coinNan}`) 
    var astro = Math.random()
    
    if (astro < 0.34) {
        astro = `${mssg.stone}`
    } else if (astro > 0.34 && astro < 0.67) {
        astro = `${mssg.sciss}`
    } else {
        astro = `${mssg.paper}`
    } 
    
    user.lastppt = new Date * 1

    if (text == astro) {
      user.coin += 10
        conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.tie} *+10 🪙*`, m, rcanal)
    } else if (text == `${mssg.stone}`) {
        if (astro == `${mssg.sciss}`) {
            user.coin += poin
            conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.win} *+${poin} 🪙*`, m, rcanal)
        } else {
          user.coin -= poin
            conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n😔 ${mssg.lost} *-${poin} 🪙*`, m, rcanal)
        }
    } else if (text == `${mssg.sciss}`) {
        if (astro == `${mssg.paper}`) {
            user.coin += poin
            conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.win} *+${poin} 🪙*`, m, rcanal)
        } else {
          user.coin -= poin
            conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n😔 ${mssg.lost} *-${poin} 🪙*`, m, rcanal)
        }
    } else if (text == `${mssg.paper}`) {
        if (astro == `${mssg.stone}`) {
            user.coin += poin
            conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.win} *+${poin} 🪙*`, m, rcanal)
        } else {
          user.coin -= poin
            conn.reply(m.chat, `  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n😔 ${mssg.lost} *-${poin} 🪙*`, m, rcanal)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return seconds + ` ${mssg.second}`
}
