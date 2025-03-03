/* 
 > Grupo Cuervo-Team-Supreme 
 ** https://chat.whatsapp.com/BirtaUEbtvR6sWjCvBbEXc
 > Canal Bots Cuervo-Team-Supreme 
 ** https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u
 HAJIME-BOT CREADO POR CUERVO-TEAM-SUPREME 
 RESPETEN LOS CREDITOS MALPARIDAS
 SI VEMOS COPIA MOS DAMOS TODO EL DERECHO A INSULTAR Y DE MAS A LA PERSONA QUE ROBO
*/
import fetch from 'node-fetch';
export async function before(m, { conn }) {
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/igw4cd.jpg');

  let nam = "Hajime┃ᴮᴼᵀ"
  
  // Respuesta con enlace de WhatsApp
  global.rpl = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: bgp,
        mediaType: 'VIDEO',
        description: 'Cuervo Team Supreme',
        title: packname,
        body: ' ׅ ̸̷͂ 𝘾𝐮𝐞𝐫̶̸̸̤𝐯𝐨 ☨ 𝙏̶꯭𝚎꯭𝚊꯭𝚖 ׁ ׅ𓅋̷̷̸̸̶᳟͈',
        thumbnailUrl: pp,
        sourceUrl: bgp
      }
    }
  };
  
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ᰔᩚ ᥕһᥲ𝗍sᥲ⍴⍴ ᑲ᥆𝗍', orderTitle: 'Bang', thumbnail: fglog, sellerJid: '0@s.whatsapp.net'}}}
global.fake = estilo
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  // Respuesta con enlace de Canal de WhatsApp
  global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgcanal,
        mediaType: 'VIDEO',
        description: 'Cuervo Team Supreme',
        title: packname,
        body: ' ׅ ̸̷͂ 𝘾𝐮𝐞𝐫̶̸̸̤𝐯𝐨 ☨ 𝙏̶꯭𝚎꯭𝚊꯭𝚖 ׁ ׅ𓅋̷̷̸̸̶᳟͈',
        thumbnailUrl: pp,
        sourceUrl: fgcanal
      }
    }
  }
  
    // Forwarded
  global.fwc = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }
    }
  }

  // Respuesta con enlace de PayPal
  global.rpyp = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgpyp,
        mediaType: 'VIDEO',
        description: '卍𝐓𝐇𝐄_𝐖𝐚𝐭𝐜𝐡𝐦𝐞𝐧-𝐓𝐞𝐚𝐦𝟕𝐮𝟕👑',
        title: packname,
        body: 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷',
        thumbnailUrl: pp,
        sourceUrl: fgpyp
      }
    }
  };

  // Respuesta con enlace de Instagram
  global.rpig = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgig,
        mediaType: 'VIDEO',
        description: ' ׅ ̸̷͂ 𝘾𝐮𝐞𝐫̶̸̸̤𝐯𝐨 ☨ 𝙏̶꯭𝚎꯭𝚊꯭𝚖 ׁ ׅ𓅋̷̷̸̸̶᳟͈',
        title: packname,
        body: 'Hajime┃ᴮᴼᵀ',
        thumbnailUrl: pp,
        sourceUrl: fgig
      }
    }
  };

  // Respuesta con enlace de YouTube
  global.rpyt = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: fgyt,
        mediaType: 'VIDEO',
        description: 'Cuervo Team Supreme',
        title: packname,
        body: 'Hajime┃ᴮᴼᵀ',
        thumbnailUrl: pp,
        sourceUrl: fgyt
      }
    }
  }
  
  
  
}
