import axios from 'axios';

const handler = async (m, { text, conn }) => {
    if (!text) return m.reply('Proporcióname el enlace de YouTube para que pueda ayudarte. 🎵');

    try {
       await m.react('🕓');

        const response = await axios.get(`https://ytdl.axeel.my.id/api/download/audio/?url=${text}`);

        if (!response.data || !response.data.metadata) {
            return m.reply('No se pudo obtener los datos del enlace de YouTube. Asegúrate de que el enlace sea correcto. 😕');
        }

        const { downloads } = response.data;
        const audioUrl = downloads.url;

            await conn.sendMessage(m.chat, { 
                audio: { url: audioUrl }, 
                fileName: `${downloads.title}.mp3`, 
                mimetype: 'audio/mp4' 
            }, { quoted: m });

        await m.react('✅');

    } catch (error) {
        await m.react('✖️');
    }
};

handler.help = ['fgdlmp3 *<url>*'];
handler.tags = ['dl'];
handler.command = ['fgdlmp3'];
export default handler;








/* import fetch from "node-fetch";
import yts from "yt-search";

let handler = async (m, { conn, text }) => {
  if (!text) {
    return m.reply("*❀ Ingresa el texto de lo que quieres buscar*");
  }

  let ytres = await yts(text);
  let video = ytres.videos[0];

  if (!video) {
    return m.reply("*❀ Video no encontrado*");
  }

  let { url } = video;

  await m.react('🕓');

  try {
    let api = await fetch(`https://api.vreden.web.id/api/ytplaymp3?query=${url}`);
    let json = await api.json();
    let { download } = json.result;

    await conn.sendMessage(m.chat, { audio: { url: download.url }, mimetype: "audio/mpeg" }, { quoted: m });
    await m.react('✅');
  } catch (error) {
    console.error(error);
    await m.react('✖️');
  }
};

handler.command = /^(ytmp3)$/i;

export default handler; */
