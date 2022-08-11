const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6283845409710']
global.premium = ['6283845409710']
global.ownernomer = '6283845409710'
global.ownername = 'kian'
global.botname = '𝗠𝗢𝗗𝗭 𝗕𝗢𝗧𝗭 '
global.footer = '© 𝙈𝙊𝘿𝙕 𝘽𝙊𝙏𝙕'
global.ig = 'https://chat.whatsapp.com/LKmbdt3kuu23VmzRZYyUVF'
global.region = 'Indonesia'
global.sc = 'https://wa.me/message/R23F6S3OPNM4A1'
global.myweb = 'https://github.com/Kianganz1'
global.packname = 'CREATE BY\nMODZ BOTZ\n'
global.author = ''
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝐃𝐎𝐍𝐄 ✓',
    admin: '𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐈𝐒 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐀𝐃𝐌𝐈𝐍!',
    botAdmin: '𝐁𝐎𝐓 𝐌𝐔𝐒𝐓 𝐁𝐄 𝐀𝐃𝐌𝐈𝐍 𝐅𝐈𝐑𝐒𝐓!',
    owner: '𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐈𝐒 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐎𝐖𝐍𝐄𝐑!',
    group: '𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐔𝐒𝐄𝐃 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐆𝐑𝐎𝐔𝐏𝐒!',
    private: '𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐔𝐒𝐄𝐃 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐂𝐇𝐀𝐓!',
    bot: '𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐈𝐒 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐁𝐎𝐓',
    wait: '𝐋𝐎𝐀𝐃𝐈𝐍𝐆...',
    error: '𝐄𝐑𝐑𝐎𝐑🤔!',
    endLimit: '𝐘𝐎𝐔𝐑 𝐃𝐀𝐈𝐋𝐘 𝐋𝐈𝐌𝐈𝐓 𝐇𝐀𝐒 𝐄𝐗𝐏𝐈𝐑𝐄𝐃, 𝐓𝐇𝐄 𝐋𝐈𝐌𝐈𝐓 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐑𝐄𝐒𝐄𝐓 𝐄𝐕𝐄𝐑𝐘 𝟏𝟐 𝐇𝐎𝐔𝐑𝐒',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/bot.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
