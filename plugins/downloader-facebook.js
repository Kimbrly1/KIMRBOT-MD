import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) throw `⚠️𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙐𝙣 𝙀𝙣𝙡𝙖𝙘𝙚 𝘿𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*!fb* https://fb.watch/rIZBcqObKa/`;

    try {
        const apiUrl = `https://api.lolhuman.xyz/api/facebook?apikey=Gatadios&url=${encodeURIComponent(args[0])}`;
        const response = await fetch(apiUrl);

        if (response.ok) {
            m.reply('*⏳️ 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙀𝙡 𝙑𝙞𝙙𝙚𝙤, 𝙀𝙨𝙥𝙚𝙧𝙚 𝙐𝙣 𝙈𝙤𝙢𝙚𝙣𝙩𝙤....*');

            const data = await response.json();
            const videoUrl = data.result[0];

            const fileName = "fb.mp4";

            const videoResponse = await fetch(videoUrl);
            const fileBuffer = await videoResponse.buffer();

            conn.sendFile(m.chat, fileBuffer, fileName, "", m);

            m.reply('*🔰 𝙑𝙞𝙙𝙚𝙤 𝘿𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝘾𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚.*');
        } else {
            throw `error

𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙤𝙗𝙩𝙚𝙣𝙚𝙧 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠.`;
        }
    } catch (error) {
        console.error(error);
        throw `error

𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠: ${error.message}`;
    }
};

handler.help = ['fb'];
handler.tags = ['dl'];
handler.command = ['fb', 'face'];

handler.register = true;
export default handler;
