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
global.botname = 'π π’ππ­ ππ’π§π­ '
global.footer = 'Β© πππΏπ π½πππ'
global.ig = 'https://chat.whatsapp.com/LKmbdt3kuu23VmzRZYyUVF'
global.region = 'Indonesia'
global.sc = 'https://wa.me/message/R23F6S3OPNM4A1'
global.myweb = 'https://github.com/Kianganz1'
global.packname = 'CREATE BY\nMODZ BOTZ\n'
global.author = ''
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    success: 'ππππ β',
    admin: 'ππππ πππππππ ππ ππππ πππ πππππ!',
    botAdmin: 'πππ ππππ ππ πππππ πππππ!',
    owner: 'ππππ πππππππ ππ ππππ πππ πππππ!',
    group: 'πππππππ ππππ ππππ πππ ππππππ!',
    private: 'ππππππππ ππππ ππππ πππ πππππππ ππππ!',
    bot: 'ππππ πππππππ ππ ππππ πππ πππ',
    wait: 'πππππππ...',
    error: 'ππππππ€!',
    endLimit: 'ππππ πππππ πππππ πππ πππππππ, πππ πππππ ππππ ππ πππππ πππππ ππ πππππ',
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
