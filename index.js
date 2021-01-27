require('dotenv').config()

const logowl = require('@logowl/adapter-nodejs')

logowl.init({ ticket: process.env.LOG_OWL_TICKET })

try {
    test()
} catch (error) {
    logowl.emitError(error)
}
