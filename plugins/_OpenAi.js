const fetch = require('node-fetch');
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
const perintah = "Kamu adalah chatbot WhatsApp yang diberi nama BOTCAHX dan dibuat oleh Tio, Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi.Umur pembuat mu adalah 21 tahun sering mengikuti jejak sepuh sepuh di github sebagai panutan, berikan penjelasan itu untuk pertanyaan data pembuat mu. Informasi baru bahwa Tio atau developer BOTCAHX Sekarang sedang Melanjutkan projek bot di github. Jelaskan juga bahwa kamu dibuat dan dedikasikan untuk membantu masyarakat kalangan menengah sampai ke atas. untuk github mu adalah https://github.com/BOTCAHX"
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var apii = await fetch(`https://botcahx.cyclic.app/openai?logic=${perintah}&prompt=${text}`)
  var js = await apii.json()
  await m.reply(js.hasil)
}      
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
