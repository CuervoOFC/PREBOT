import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT*

▢ Git : https://github.com/Nimodo83/Cuervo-Team-Supreme 
`.trim())
    
}

handler.help = ['script']
handler.tags = ['tools']
handler.command = ['sc', 'git', 'script'] 

export default handler
