// Sincronizar las letras con la canción
let audio = document.querySelector("audio");
let lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
let lyricsData = [
  { text: "I", time: 5 },
  { text: "i just woke up from a dream", time: 7 },
  { text: "i just woke up from a dream", time: 9 },
  { text: "where you and i had to say goodbye", time: 14 },
  { text: "and i don't know what it all means", time: 18 },
  { text: "but since i survived, i realized", time: 19 },
  { text: "but since i survived, i realized", time: 22 },
  { text: "wherever you go, that's where i'll follow", time: 27 },
  { text: "nobody's promised tomorrow", time: 28 },
  { text: "nobody's promised tomorrow", time: 31 },
  { text: "so i'm a love you every night like it's the last night", time: 36 },
  { text: "like it's the last night", time: 39 },
  { text: "if the world was ending, i'd wanna be next to you", time: 40 },
  { text: "if the world was ending, i'd wanna be next to you", time: 43 },
  { text: "if the party was over and our time on earth was through", time: 52 },
  { text: "if the party was over and our time on earth was through", time: 55 },
  { text: "i'd wanna hold you just for a while", time: 61 },
  { text: "and die with a smile", time: 65 },
  { text: "if the world was ending, i'd wanna be next to you", time: 67 },  
  { text: "if the world was ending, i'd wanna be next to you", time: 69 },  
  { text: "if the world was ending, i'd wanna be next to you", time: 72 },  
  { text: "woo-ooh-ooh, lost", time: 82 },
  { text: "lost in the words that we scream", time: 83 },
  { text: "lost in the words that we scream", time: 85 },
  { text: "i don't even wanna do this anymore", time: 92 },
  { text: "'cause you already know what you mean to me", time: 95 },
  { text: "and our love is the only war worth fighting for", time: 100 },
  { text: "wherever you go, that's where i'll follow", time: 105 },
  { text: "nobody's promised tomorrow", time: 109 },
  { text: "so i'm a love you every night like it's the last night", time: 113 },
  { text: "like it's the last night", time: 116 },
  { text: "if the world was ending, i'd wanna be next to you", time: 119 },
  { text: "if the world was ending, i'd wanna be next to you", time: 121 },
  { text: "if the party was over and our time on earth was through", time: 129 },
  { text: "if the party was over and our time on earth was through", time: 132 },
  { text: "i'd wanna hold you just for a while", time: 138 },
  { text: "and die with a smile", time: 144 },
  { text: "if the world was ending, i'd wanna be next to you", time: 146 },
  { text: "if the world was ending, i'd wanna be next to you", time: 149 },
  { text: "if the world was ending, i'd wanna be next to you", time: 151 },
  { text: "right next to you", time: 157 },
  { text: "next to you", time: 159 },
  { text: "right next to you", time: 165 },  
  { text: "if the world was ending, i'd wanna be next to you", time: 189 },
  { text: "if the world was ending, i'd wanna be next to you", time: 191 },
  { text: "if the party was over and our time on earth was through", time: 198 },
  { text: "if the party was over and our time on earth was through", time: 200 },
  { text: "if the party was over and our time on earth was through", time: 202 },
  { text: "i'd wanna hold you just for a while", time: 207 },
  { text: "and die with a smile", time: 210 },
  { text: "if the world was ending, i'd wanna be next to you", time: 213},
  { text: "if the world was ending, i'd wanna be next to you", time: 216},
  { text: "if the world was ending, i'd wanna be next to you", time: 226 },  
  { text: "if the world was ending, i'd wanna be next to you", time: 228 },  
  { text: "i'd wanna be next to you", time: 237 },  
  { text: "TE AMA...", time: 239 },  
  { text: "JOHNY ❤️", time: 241 },  
];

// Animar las letras
function updateLyrics() {
  let time = Math.floor(audio.currentTime);
  let currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    let fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    let opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  let titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 270000);