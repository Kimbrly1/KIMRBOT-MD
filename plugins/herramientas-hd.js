import FormData from "form-data";
import Jimp from "jimp";
const handler = async (m, {conn, usedPrefix, command}) => {
 try {    
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime) throw `*🍭  𝐄𝐧𝐯𝐢𝐞 𝐔𝐧𝐚 𝐈𝐦𝐚𝐠𝐞𝐧 𝐘 𝐋𝐮𝐞𝐠𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐂𝐨𝐧 𝐄𝐥 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 !hd*`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*🚩 𝐄𝐥 𝐅𝐨𝐫𝐦𝐚𝐭𝐨 𝐃𝐞 𝐋𝐚 𝐌𝐮𝐬𝐢𝐜𝐚 (${mime}) 𝐍𝐨 𝐄𝐬 𝐂𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐥𝐞, 𝐄𝐧𝐯𝐢𝐞 𝐎 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐀 𝐔𝐧𝐚 𝐅𝐨𝐭𝐨*`;
  m.reply("⌛ 𝙴𝚜𝚙𝚎𝚛𝚎 𝚄𝚗 𝙼𝚘𝚖𝚎𝚗𝚝𝚘...");
  let img = await q.download?.();
  let pr = await remini(img, "enhance");
  conn.sendMessage(m.chat, {image: pr}, {quoted: m});
 } catch {
  throw "*⚡️ 𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐔𝐧 𝐄𝐫𝐫𝐨𝐫*";
 }
};
handler.help = ["remini", "hd", "enhance"];
handler.tags = ["ai", "tools"];
handler.command = ["remini", "hd", "enhance"];
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
    const formData = new FormData();
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
    formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {chunks.push(chunk)});
        res.on("end", function () {resolve(Buffer.concat(chunks))});
        res.on("error", function (err) {
        reject(err);
        });
      },
    );
  });
}