import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import ytdlf from "@EdderBot02/ytdlf"


const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!args || !args[0]) return conn.reply(m.chat, `*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`, fkontak, m)
try { 
const yt_play = await search(args.join(' '))
let additionalText = ''
if (command == 'playaudiodoc') {
additionalText = '𝘼𝙐𝘿𝙄𝙊'
} else if (command == 'playvideodoc') {
additionalText = '𝙑𝙄𝘿𝙀𝙊'
}
conn.reply(m.chat, `𝙋𝙍𝙊𝙉𝙏𝙊 𝙏𝙀𝙉𝘿𝙍𝘼 𝙎𝙐 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏𝙊 ${additionalText}, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`, fkontak,  m)

if (command == 'playaudiodoc') {
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { document: { url: ress.url }, mimetype: 'audio/mpeg', fileName: `audio.mp3` }, { quoted: m });
handler.coin = 3
} catch (e1) {
try {    
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { document: { url: result.download.url }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
handler.coin = 3
} catch (e1) {
try{
let x=await ytdlf(`${yt_play[0].url}`,"mp3");
await conn.sendMessage(m.chat, { audio: { url:x.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
}
catch {
try {    
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
let cap = `╭━❰  ${botName}  ❱━⬣\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n┃ও *Tutulo:* \n┃» ${ttl}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *DESCARGA BY HAJIME-ULTRA*\n╰━━━━━❰ *${packname}* ❱━━━━⬣`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
handler.coin = 3
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, { document: { url: lolh.result.link }, caption: `╭━❰  ${botName}  ❱━⬣\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘿𝙇 📥\n┃ও *Titulo:* \n┃» ${n}\n╰━━━━━❰ *${packname}* ❱━━━━⬣`, fileName: `${n}.mp3`, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: n, 
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
//await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, caption: `╭━❰  ${wm}  ❱━⬣\n┃📥 YOUTUBE DL 📥\n┃ও *TÍTULO | TITLE:* \n┃» ${n}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *PESO | SIZE:*\n┃» ${n2}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
handler.coin = 3
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
await conn.sendMessage(m.chat, { document: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: __res[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
handler.coin = 3
} catch {
}}}}}}}

if (command == 'playvideodoc') {
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { document: { url: ress.url }, fileName: `${yt_play[0].title}.mp4`, caption: `╭━❰  ${botName}  ❱━⬣\n┃TITULO:\n┃ ${yt_play[0].title}\n╰━━━━━❰ *𓃠 ${packname}* ❱━━━━⬣`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })    
handler.coin = 3
} catch (e1) {
try {    
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { document: { url: result.download.url }, fileName: `${yt_play[0].title}.mp4`, caption: `╭━❰  ${botName}  ❱━⬣\n┃ Título:\n┃ ${yt_play[0].title}\n╰━━━━━❰ *𓃠 ${packname}* ❱━━━━⬣`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })    
handler.coin = 3
} catch (e1) {
try{
let y=await ytdlf(`${userVideoData.url}`,"360");
await conn.sendMessage(m.chat, { video: { url:y.downloadUrl }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: `⟡ *${userVideoData.title}*\n> ${packname}`}, { quoted: m || null })
}
catch {
try {    
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `╭━❰  ${botName}  ❱━⬣\n┃ 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n┃ও *TÍTULO:* \n┃» ${ttl}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *DESCARGA BY HAJIME-ULTRA*\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
handler.coin = 3
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
handler.coin = 3
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${botName}  ❱━⬣\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘿𝙇 📥\n┃ও *TÍTULO:* \n┃» ${n}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *DESCARGA BY HAJIME-ULTRA*\n╰━━━━━❰ *𓃠 ${packname}* ❱━━━━⬣`, thumbnail: await fetch(n4)}, {quoted: m});
handler.coin = 3
} catch {
}}}}}}}
} catch (e) {
await conn.reply(m.chat, `#report ${usedPrefix + command}\n\n${botName}`, fkontak, m)
console.log(`❗❗ ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.help = ['playaudiodoc', 'playvideodoc'].map((v) => v + ' < busqueda >');
handler.tags = ['dl'];
handler.command = ['playaudiodoc', 'playvideodoc']
handler.coin = 3
handler.register = true
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
})}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
const {contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {audio: item.url, size: bytes};
}}
const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, result2: resultFix, thumb});
}).catch(reject);
})}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
const {qualityLabel, contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {video: item.url, quality: qualityLabel, size: bytes};
}}
const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
}).catch(reject);
})}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getAudio = await ytMp3(random);
resolve(getAudio);
}).catch(reject);
})}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getVideo = await ytMp4(random);
resolve(getVideo);
}).catch(reject);
})}
