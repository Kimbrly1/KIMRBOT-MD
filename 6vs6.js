import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤㅤ  𝑽𝑬𝑹𝑺𝑼𝑺 
╰──────⚔──────╯
╭──────────────╮
│ㅤ *𝑴𝑶𝑫𝑶*  : COMPE
│ㅤ⏱ 𝑯𝑶𝑹𝑨𝑹𝑰𝑶 
│ㅤ🇪🇨 𝑬𝑪:
│➥ 𝑬𝑺𝑪𝑼𝑨𝑫𝑹𝑨: 
│➥ 𝑱𝑼𝑮𝑨𝑫𝑶𝑹𝑬𝑺:
│
│     ☞𝑬𝑺𝑪𝑼𝑨𝑫𝑹𝑨: 
│
│👑 ➤ 
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│🥷🏻 ➤
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│ㅤ☞𝑺𝑼𝑷𝑳𝑬𝑵𝑻𝑬:
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
                
` 
}
handler.command = /^(vs6|6vs6)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler