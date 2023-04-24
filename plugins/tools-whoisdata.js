const fetch = require('node-fetch');
const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `Masukkan Domain/Sub Domain!\n\n*Contoh:* api.botcahx.biz.id`;
  }
  if (text.includes('https://') || text.includes('http://')) {
    throw `Tolong masukkan domain/sub domain secara lengkap. Contoh: api.botcahx.biz.id`;
  }
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Token=6c7bd1ce704d92c90e2f78d42641a9ee0cbcef198a6ad62a3dd06deb22af6fd3' //ganti apikey sendiri kalo abis :v
    }
  };
  try {
    const response = await fetch(`https://whoisjson.com/api/v1/whois?domain=${text}`, options);
    const data = await response.json();
    m.reply(JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};
handler.command = ['whoisdata','whois2'];
handler.help = ['whoisdata','whois2'];
handler.tags = ['tools'];
handler.premium = false;
module.exports = handler;
