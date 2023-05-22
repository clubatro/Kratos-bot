/*let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{  
let Terminos = `
*Términos y Condiciones para el uso del bot de WhatsApp oficial KRATOS_SOLUTIONS:

1. Aceptación de los términos
Al utilizar el bot de WhatsApp KRATOS_SOLUTIONS ("el bot"), aceptas automáticamente estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de los términos, te recomendamos que no utilices el bot.

2. Uso autorizado
El bot de WhatsApp KRATOS_SOLUTIONS *
`.trim()
await m.reply(Terminos)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.customPrefix = /terminos|términos|terms|condiciones|privacidad/i
handler.command = new RegExp
export default handler*/
