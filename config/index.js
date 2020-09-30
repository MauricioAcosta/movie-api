require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.PORT || 3000
}

module.exports = { config };