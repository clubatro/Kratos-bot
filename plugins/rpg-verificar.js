import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
if (user.registered === true) throw lenguajeGB.smsVerify0(usedPrefix) + '*'
if (!Reg.test(text)) throw lenguajeGB.smsVerify1(usedPrefix, command)
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw lenguajeGB.smsVerify2()
if (!age) throw lenguajeGB.smsVerify3()
age = parseInt(age)
if (age > 50) throw lenguajeGB.smsVerify4()
if (age < 10) throw lenguajeGB.smsVerify5()
if (name.length >= 30) throw lenguajeGB.smsVerify6()
user.name = name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())
let caption = `${lenguajeGB.smsVerify7()}

*⎔ ${lenguajeGB.smsPerfil1()}* 
• @${tag}

*⎔ ${lenguajeGB.smsPerfil2()}* 
• ${name}

*⎔ ${lenguajeGB.smsPerfil3()}*
• ${age}

*⎔ ${lenguajeGB.smsVerify9()}*
• 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'

*⎔ ${lenguajeGB.smsPerfil5()}*
• \`\`\`${sn}\`\`\``.trim()
await conn.sendFile(m.chat, pp, 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeGB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`) 
}
handler.command = /^(verify|verificar|reg(ister)?)$/i
export default handler
