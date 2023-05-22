import { watchFile, unwatchFile } from 'fs'  
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰   

global.owner = [
['', '', false], 
['51904049358', '𝙊𝙬𝙣𝙚𝙧 (1) 💻', true],  
['51917924795', '𝙊𝙬𝙣𝙚𝙧 (2) 💻', true],  
['', '𝘾𝙪𝙨𝙩𝙤𝙢𝙚𝙧 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 🍓', false],
[''], 
[''],
[''],
['']]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = []
   
  
/*⊱ ━━━━━.⋅ IDIOMA : LENGUAJE ⋅.━━━━ ⊰  
Agrega el Idioma que quieres que tenga kratos-ofc
Add the language you want kratos-ofc to have
  es = Español         id = Bahasa Indonesia
  en = English         pt = Português 
  ar = عرب
*/
global.lenguajeGB = es  //<--- [es, en, ar, id, pt] Escribir el código de Idioma
 
//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.openai_key = 'sk-0'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'SGWN'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'KRATOS-BOT 🇦🇱'
global.author = 'Atro'

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.official = [ // Agregate si eres Owner
['', 'KRATOS-BOT 💻', 1], 
['51904049358', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
['', '𝗖𝘂𝘀𝘁𝗼𝗺𝗲𝗿 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 🍓', 1],
['51917924795', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.mail = '' //agrega tu correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.0.1'
global.vsJB = '3.0'

global.gt = 'KRATOS-SOLUTIONS'
global.yt = 'https://youtube.com/@'
global.yt2 = 'https://www.youtube.com'
global.ig = 'https://www.instagram.com/clubatro'
global.md = 'https://github.com/clubatro/Kratos-bot'
global.fb = 'https://www.facebook.com'

global.nna = 'https://chat.whatsapp.com/DJIar8PchzyCnjzGXTg3Bn'
global.nna2 = '' //Help
global.nn = 'https://chat.whatsapp.com/DJIar8PchzyCnjzGXTg3Bn' //Grupo 1
global.nnn = '' //Grupo 2
global.nnnt = '' //Grupo 3
global.nnntt = '' //Grupo 4
global.nnnttt = '' //Grupo 5
global.nnnttt2 = '' //Grupo 6 COL
global.nnnttt3 = '' //Grupo 7 COL
global.nnnttt4 = '' //Grupo 8 COL
global.nnnttt5 = '' //Grupo 9 COL
global.paypal = 'https://paypal.me/'
global.asistencia = 'Wa.me/51904049358','Wa.me/51917924795' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = 'KRATOS-OFC 🇦🇱 : SOLUTIONS'
global.igfg = 'KRATOS-SOLUTIONS'
//global.wait = lenguajeGB.smsWait()
global.nomorown = owner[0][0]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ IMG ⋅.━━━━ ⊰

global.imagen1 = fs.readFileSync('./media/menus/.images.jpeg.jpg')
global.imagen2 = fs.readFileSync('./media/menus/images.jpeg.jpg')
global.imagen3 = fs.readFileSync('./media/menus/images.jpeg.jpg')
global.imagen4 = fs.readFileSync('./media/menus/IMG-20230516-WA0149-4.jpg')
global.imagen5 = fs.readFileSync('./media/menus/IMG-20230516-WA0151.jpg')
global.imagen6 = fs.readFileSync('./media/menus/IMG-20230516-WA0152.jpg')
global.imagen7 = fs.readFileSync('./media/menus/IMG-20230516-WA0153.jpg')
global.imagen8 = fs.readFileSync('./media/menus/.jpg')
global.imagen9 = fs.readFileSync('./media/menus/.jpg')
global.imagen10 = fs.readFileSync('./media/menus/.jpg')
global.imagen11 = fs.readFileSync('./media/menus/.jpg')
global.imagen12 = fs.readFileSync('./media/menus/.jpg')
global.imagen13 = fs.readFileSync('./media/menus/.jpg')

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://.jpeg'
global.img2 = 'https://.jpeg'

global.img3 = 'https://.jpg' //ft rectangular

//global.img3 = 'https://.jpg' //prem   //no
//global.img4 = 'https://.jpg' //prem   //no

global.img5 = 'https://.jpeg'
global.img6 = 'https://.jpeg'
global.img7 = 'https://.jpeg'
global.img8 = 'https://.jpeg'
global.img9 = 'https://.jpeg'

global.img10 = 'https://.jpeg'
global.img11 = 'https://.jpeg'
global.img12 = 'https://.jpeg'
global.img13 = 'https://.jpeg'
global.img14 = 'https://.jpeg'
global.img15 = 'https://.jpeg'

//global.img16 = 'https://' //+18   //no

global.img17 = 'https://.jpeg'
global.img18 = 'https://.jpeg'
global.img19 = 'https://.jpeg'
global.img20 = 'https://.jpeg'
global.img21 = 'https://.jpeg'

global.img21 = 'https://.jpeg' //paypal

global.welkrato = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, fb]
global.kratos-ofcMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.kratoImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.wait = lenguajeGB['smsMeWait']()

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
