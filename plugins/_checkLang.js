/* 
 > Grupo Cuervo-Team-Supreme 
 ** https://chat.whatsapp.com/BirtaUEbtvR6sWjCvBbEXc
 > Canal Bots Cuervo-Team-Supreme 
 ** https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u
 HAJIME-BOT CREADO POR CUERVO-TEAM-SUPREME 
 RESPETEN LOS CREDITOS MALPARIDAS
 SI VEMOS COPIA MOS DAMOS TODO EL DERECHO A INSULTAR Y DE MAS A LA PERSONA QUE ROBO
*/
import { en, es, id, pt, ar } from '../language/index.js'

export async function before(m,{ conn }) {

	let lang = global.db.data.users[m.sender].language
	
  let translations
   if (lang === "es") {
      translations = es
     } else if (lang === "en") {
      translations = en
     } else if (lang === "id") {
      translations = id
     } else if (lang === "pt") {
      translations = pt
      } else if (lang === "ar") {
      translations = ar
     } else {
      translations = es
     }

	global.mssg = translations
	
}
