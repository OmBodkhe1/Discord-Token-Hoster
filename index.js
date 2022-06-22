const fs = require('fs')
const color = require('colors')

const hoster = async () => {
  const tokens = [...new Set(fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/g, '').split('\n'))];
  const text =`
----------------------------------------------------------------------------------
    Discord Token Hoster | Tokens Hosted: ${tokens.length} | Made by Oᴍ !!!#9649
----------------------------------------------------------------------------------`
  console.clear() 
  process.title = `Discord Token Hoster | Tokens: ${tokens.length} | Made by Oᴍ !!!#9649`
  console.log(text.yellow)
  console.log("\n")
  tokens.forEach(async x => { host({ token: x }) })
}

async function host({ token: token }) {
  const Discord = require('legend.js');
  const client = new Discord.Client()
  client.on('ready', async => { console.log(`${color.red('[!]')} Hosted: ${color.green(`${client.user.tag}`)}`) })
  client.login(token)
}

hoster()