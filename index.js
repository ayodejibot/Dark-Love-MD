const bot = require(__dirname + '/lib/amd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting Dark-Love-MD ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
/**
Dark-Love-MD WHATSAPPP BOT
**/
