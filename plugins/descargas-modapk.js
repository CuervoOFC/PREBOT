import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw conn.reply(m.chat, '*\`Ingrese el nombre de la APK que quiera buscar.\`*', m, rcanal)
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *Descargador de Aptoide* 📲\n\n📌 *Nombre:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *Última actualización:* ${data5.lastup}\n📥 *Tamaño:* ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', response, m, null, rpl)
//    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: rpl});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: rpl});
  } catch {
    throw conn.reply(m.chat, `*[❗] Error, no se encontrarón resultados para su búsqueda.*`, m, rcanal);
  }    
};
handler.help = ['apk *<nombre>*']
handler.tags = ['dl']
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
