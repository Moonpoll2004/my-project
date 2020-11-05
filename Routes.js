const express = require("express");
const router = express();

const userRoutes = require('./routes/userRoutes.js')
const adminRoutes = require('./routes/adminRoutes.js')

router.use('/',userRoutes)
router.use('/',adminRoutes)

module.exports = router;