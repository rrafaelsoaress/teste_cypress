// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Change download directory
module.exports = (on) => {
    on('before:browser:launch', (browser, options) => {
      const downloadDirectory = path.join(__dirname, '..', 'downloads')
  
      if (browser.family === 'chromium' && browser.name !== 'electron') {
        options.preferences.default['download'] = { default_directory: downloadDirectory }
  
        return options
      }
  
      if (browser.family === 'firefox') {
        options.preferences['browser.download.dir'] = downloadDirectory
        options.preferences['browser.download.folderList'] = 2
  
        // needed to prevent download prompt for text/csv files.
        options.preferences['browser.helperApps.neverAsk.saveToDisk'] = 'text/csv'
  
        return options
      }
    })
  }

//   Set screen size when running headless
  module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === 'chrome' && browser.isHeadless) {
        // fullPage screenshot size is 1400x1200 on non-retina screens
        // and 2800x2400 on retina screens
        launchOptions.args.push('--window-size=1400,1200')
  
        // force screen to be non-retina (1400x1200 size)
        launchOptions.args.push('--force-device-scale-factor=1')
  
        // force screen to be retina (2800x2400 size)
        // launchOptions.args.push('--force-device-scale-factor=2')
      }
  
      if (browser.name === 'electron' && browser.isHeadless) {
        // fullPage screenshot size is 1400x1200
        launchOptions.preferences.width = 1400
        launchOptions.preferences.height = 1200
      }
  
      if (browser.name === 'firefox' && browser.isHeadless) {
        // menubars take up height on the screen
        // so fullPage screenshot size is 1400x1126
        launchOptions.args.push('--width=1400')
        launchOptions.args.push('--height=1200')
      }
  
      return launchOptions
    })
  }

//   Start fullscreen
  module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.family === 'chromium' && browser.name !== 'electron') {
        launchOptions.args.push('--start-fullscreen')
  
        return launchOptions
      }
  
      if (browser.name === 'electron') {
        launchOptions.preferences.fullscreen = true
  
        return launchOptions
      }
    })
  }