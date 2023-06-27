const { defineConfig } = require('cypress')
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// VARIVAEL DE AMBIENTE
require('dotenv').config();
const fs = require('fs-extra')
const path = require('path')
const pdf = require('pdf-parse');
const repoRoot = path.join(__dirname, 'mydownloads') // assumes pdf at project root

const parsePdf = async (pdfName) => {
  const pdfPathname = path.join(repoRoot, pdfName)
  let dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer) //use async/await since pdf returns a promise
}

function getConfigurationByFile(file) {
  // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}
// FECHA VARIAVEL DE AMBIENTE
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      require('@cypress/grep/src/plugin')(config);
      on('task', {
        downloadFile,
        getPdfContent(pdfName) {
          return parsePdf(pdfName)
        }
      })
      const file = config.env.configFile || 'qa'
      return config,getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/*/*.spec.js",
    projectId: "cypress-automation-test",
    chromeWebSecurity: false,
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 120000,
    responseTimeout: 90000,
    video: false,
    retries: {
      runMode: 3,
      openMode: 0,
    },
    env: {
      allureClearSkippedTests: true,
      allureAttachRequests: true
    },
    viewportWidth: 1280,
    viewportHeight: 800,
    numTestsKeptInMemory: 10,
    experimentalRunAllSpecs: true
  }
});