const mongoose = require("mongoose")
const TaskModel = require("../models/TaskModel")

const createTask = async (req, res) => {
    const {title, description} = req.body
    
    try{
      const task = await TaskModel.create({title, description})
      res.status(200).json(task)

    }catch(err){
      res.status(400).json({
        message: err.message
      })
    }
    
}

const getTask = async(req, res) => {
  try{
    const task = await TaskModel.find({})
    res.status(200).json(task)
  }catch(err){
    res.status(400).json({
      message: err.message
    })
  }
}

const getSingleTask = async (req, res) => {
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({message: "Task Not Found!"})
  }
  try{
    const singleTask = await TaskModel.findById(id)
    res.status(200).json(singleTask)

  }catch(err){
    res.status(400).json({
      message: err.message
    })
  }
}

module.exports = {createTask, getTask, getSingleTask} 