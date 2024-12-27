const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementar ouvintes de eventos do node aqui
    },
    video: true, // Habilita a gravação de vídeos
    videoCompression: 32, // Ajusta a compressão do vídeo (0-51, onde 0 é sem compressão)
    videosFolder: 'cypress/videos', // Pasta onde os vídeos serão salvos
    screenshotOnRunFailure: true, // Tira screenshots em caso de falhas
  },
});