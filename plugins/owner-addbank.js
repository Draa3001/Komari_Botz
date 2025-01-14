let { MessageType } = require('@whiskeysockets/baileys')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, ' *Example :* .addbank 628816609112 1000', m)
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, ' Tag salah satu lah', m)
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) return conn.reply(m.chat, ' Only Number!', m)
  let bank = parseInt(txt)
  let bank = bank
  if (bank >= 9999999999) conn.reply(m.chat, ``, m)
  else if (bank < 9999999999) {
  let users = global.db.data.users
  users[who].bank += bank
  
  conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${bank}BANK!`, m, { mentions: [who] }, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }
}
handler.help = ['addbank *<@user> <amount>*']
handler.tags = ['owner']
handler.command = /^addbank$/
handler.rowner = false
handler.premium = false
handler.rowner = true

module.exports = handler