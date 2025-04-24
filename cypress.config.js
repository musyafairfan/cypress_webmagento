const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    pageLoadTimeout: 120000, // 120 detik
    defaultCommandTimeout: 10000, // Tambahkan jika perlu
  },
});
