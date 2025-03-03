function handler(m) {
let name = conn.getName('5213318360934@s.whatsapp.net')
let ownerN = '5213318360934'
conn.sendContact(m.chat, [[`${ownerN}@s.whatsapp.net`, `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: `Mi Creador Contacta En Caso De Ser Necesario.`, 
 body: botName, 
 sourceUrl: 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u',
 thumbnail: fglog,
 thumbnailUrl: 'https://files.catbox.moe/7edgpz.jpeg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: fkontak
           }
             );

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 

export default handler