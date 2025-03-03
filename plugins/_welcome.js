import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/igw4cd.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let gfkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }


  if (chat.welcome && m.messageStubType == 27) {
    let bienve = `> ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭◌⟆࣭࣭ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ໑࣭࣭ٜ⟅◌
\`H̷࣮ᰮA̷̸֧JࣲؚׅIׅM̷̿E̶꯭ B̷͡O̷͡꙱T̷ U̷̸ࣲḺ̶̨̻̃͑̕͠T̷̸⃜᪾ۣܻؕ͋R̷͡A̸̷̶\`
╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ *「 ${groupMetadata.subject} 」*
┊︶︶︶︶︶︶︶︶︶❀࿆⃧፝྅⃕
┊ *\`ʙ ɪ ᴇ ɴ ᴠ ᴇ ɴ ɪ ᴅ ᴀ / ᴏ\`*
┊╭┈──̇─̇─̇───᭥ꩌ゚໋.ᩦ୭✧ࣶᭂ
┊╰┈─➤ ❝ @${m.messageStubParameters[0].split`@`[0]} ❞
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯`
await conn.sendAi(m.chat, botName, author, bienve, fglog, fglog, fgcanal, estilo)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `> ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭◌⟆࣭࣭ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ໑࣭࣭ٜ⟅◌
\`H̷࣮ᰮA̷̸֧JࣲؚׅIׅM̷̿E̶꯭ B̷͡O̷͡꙱T̷ U̷̸ࣲḺ̶̨̻̃͑̕͠T̷̸⃜᪾ۣܻؕ͋R̷͡A̸̷̶\`
╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ *「 ${groupMetadata.subject} 」*
┊︶︶︶︶︶︶︶︶︶❀࿆⃧፝྅⃕
┊ *\`ᴀ ᴅ ɪ ᴏ ꜱ\`*
┊╭┈──̇─̇─̇───᭥ꩌ゚໋.ᩦ୭✧ࣶᭂ
┊╰┈─➤ ❝ @${m.messageStubParameters[0].split`@`[0]} ❞
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯`
await conn.sendAi(m.chat, botName, author, bye, fglog, fglog, fgcanal, estilo)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `> ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭◌⟆࣭࣭ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ໑࣭࣭ٜ⟅◌
\`H̷࣮ᰮA̷̸֧JࣲؚׅIׅM̷̿E̶꯭ B̷͡O̷͡꙱T̷ U̷̸ࣲḺ̶̨̻̃͑̕͠T̷̸⃜᪾ۣܻؕ͋R̷͡A̸̷̶\`
╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ *「 ${groupMetadata.subject} 」*
┊︶︶︶︶︶︶︶︶︶❀࿆⃧፝྅⃕
┊ *\`ᴀ ᴅ ɪ ᴏ ꜱ\`*
┊╭┈──̇─̇─̇───᭥ꩌ゚໋.ᩦ୭✧ࣶᭂ
┊╰┈─➤ ❝ @${m.messageStubParameters[0].split`@`[0]} ❞
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯`
await conn.sendAi(m.chat, botName, author, kick, fglog, fglog, fgcanal, estilo)
}}