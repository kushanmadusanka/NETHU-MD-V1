const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*╭───────────◉◉►*
*│Hey, I'm QUEEN-KYLIE-MD, Created By*
*│Sahas Tech✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
*│►.apk*
*│►.news*
*│►.img*
*│►.kylie*
│ ─────────
│🔍𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🔎
*│─────────*
*│►.yts*
│─────────
│👾𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦👾
*│─────────*
*│►.ai*
│─────────
│📍𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦📍
*│─────────*
*│►.restart*
│ ─────────
│💫𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
│─────────
│⛥𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⛥
*│─────────*
*│►.promote*
*│►.demote*
*│►.remove*
*│►.setpic*
*│►.del*
*│►.add*
*│►.setwelcome*
*│►.setgoodbye*
*╰───────────◎◎►*
*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/938f552daff11c7f73378.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})