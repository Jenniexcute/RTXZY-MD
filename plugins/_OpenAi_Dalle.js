var fetch = require('node-fetch');
var handler = async (m, { text, command, conn }) => {
  if (!text) throw 'Masukan teks untuk diubah menjadi gambar'
  var response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
  var image = await response.buffer()
  conn.sendFile(m.chat, image, 'dalle.jpg',  wm, m)
}
handler.command = handler.help = ['aiimg','aiimage','ai-image','dalle']
handler.tags = ['tools']
module.exports = handler
