/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

const handler = async (m, {conn, text}) => {
  m.reply(`*➢ *"${pickRandom(global.piropo)}"*\n*𝒀𝒆𝒓𝒂𝒚𝑩𝒐𝒕-𝑴𝑫*`);
};
handler.tags = ['frases'];
handler.command = ['piropo'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.piropo = ['El amor será ciego, pero hay que ver lo mucho que alegras la vista.', 'Si un día olvido lo hermosa que eres, ayúdame a recordarlo con la luz de tu sonrisa y el sabor de tus labios.', 'Eres la canción que hace sonar mi guitarra.', 'Si Cristóbal Colón te viera, diría: ¡Santa María, qué pinta tiene esa niña!', 'Quisiera ser mantequilla para derretirme en tu arepa.', 'Si yo fuera un avión y tu un aeropuerto, me la pasaría aterrizando por tu hermoso cuerpo.', '¿Estás preparada para subir a la Luna? Porque tengo el cohete preparado.', 'Robar Está Mal Pero Un Beso De Tu Boca Sí Me Lo Robaría.', 'Cómo me gustaría ser tu secador de pelo… para que todos los días me agarres del mango.', 'Hermoso vestido, quedaría muy bien en el suelo de mi dormitorio.', 'Cuidado con mi abejorro mamacita, que le gustan las flores', 'Quisiera que fueses monte para darte machete', 'Perdí mi número de teléfono ¿Me das el tuyo?', '¿Cómo te llamas para pedirte de regalo a Santa Claus?', ' En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.', '¿Acaba de salir el sol o es la sonrisa que me regalas hoy?', 'No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza', 'Si hablamos de matemáticas eres la suma de todos mis deseos.', 'Pareces Google porque tienes todo lo que yo busco.', 'Mi café favorito, es el de tus ojos.', 'Quiero ser photoshop para retocarte todo el cuerpo.', 'Quisiera que fueras cereal, para cucharearte en las mañanas.', 'Quien fuera hambre, para darte tres veces al día.'];
