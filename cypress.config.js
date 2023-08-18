const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      
    },
     // Base da URL
    baseUrl:"https://mercadolivre.com.br",
    chromeWebSecurity:false
  },
});
