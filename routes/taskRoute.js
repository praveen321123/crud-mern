const express = require('express')
const  {createTask, getTask, getSingleTask}  = require("../controllers/taskController")

const router = express.Router()

router.post('/', createTask)
router.get('/', getTask)
router.get('/:id', getSingleTask)
module.exports = router
