const userController = require('../controller/user/userController')
const express = require('express')
const router = express.Router()

router.get('/user', userController.getUser)
router.post('/user', userController.createUser)
router.put('/user', userController.updateUser)
router.delete('/user', userController.deleteUser)

module.exports = router
