import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
['5213318360934', 'CuervoOFC', true], 
['5213339157315', 'karasu', true],
['5493517322733', 'cuervo', true], 
['5212722801554', 'Tae-HaBot', true],
['5713237649689', 'Abrahan987', true],
['5493518585303', 'Yisuki-Sam', true],
['573135381432', 'LCF', true]
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// INFO WM
global.packname = 'Hajime┃ᴮᴼᵀ' 
global.author = 'By: Hajime' 

//-- INFO HAJIME
global.botName = 'Hajime'
global.fgig = global.fgsc = global.fgyt = global.fgpyp = 'https://atom.bio/cuervo-team-supreme'
global.fglog = 'https://files.catbox.moe/igw4cd.jpg' 

//--- INFO WA
global.id_canal = '120363266403694976@newsletter' //-ID de canal de WhatsApp
global.fgcanal = global.bgp = global.bp2 = global.bgp3 = 'https://github.com/Nimodo83/Cuervo-Team-Supreme'

// INFO EXTRAS 
global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: 52133××××××××
global.confirmCode = ''
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.7'
global.languaje = 'Español'
global.nameqr = 'Hajime-Bot'
global.namebot = 'Hajime'
global.sessions = 'Session'
global.jadi = 'JadiBot'
global.yueJadibts = true 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
