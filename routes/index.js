const express = require('express')

const router = express.Router({ mergeParams: true})

router.use('/', require('./growatt.routes'))

module.exports = router