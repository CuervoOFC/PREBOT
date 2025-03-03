
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
	≡ *MUSIC*
┌──────────────
▢ 📌 *${mssg.title}:* ${vid.title}
▢ 📆 *${mssg.aploud}:* ${vid.ago}
▢ ⌚ *${mssg.duration}:* ${vid.timestamp}
▢ 👀 *${mssg.views}:* ${vid.views.toLocaleString()}
└──────────────`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}ytmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}ytmp4 ${url}`],
    ['🎧 MP3 DOC', `${usedPrefix}ytmp3doc ${url}`],
    ['🗃 MP4 DOC', `${usedPrefix}ytmp4doc ${url}`],
    ['🖇 BUSCAR MAS', `${usedPrefix}ytmax ${url}`],
    ['🎧 MP3 V2', `${usedPrefix}yt3 ${url}`],
    ['🎥 MP4 V2', `${usedPrefix}yt4 ${url}`],
    ['🎵 MP3 V3', `${usedPrefix}ytdl ${url}`],
    ['🎥 MP4 V3', `${usedPrefix}ytdl2 ${url}`],
    ['🎼 MP3 V4', `${usedPrefix}dlmp3 ${url}`],
    ['📹 MP4 V4', `${usedPrefix}dlmp4 ${url}`]
  ], null, [['Canal', `${fgcanal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'play2']
handler.register = true 

export default handler
