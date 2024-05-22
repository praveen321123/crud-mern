const mongoose = require('mongoose')
const mongodb = require('mongodb')
const Schema = mongoose.Schema

const TaskSchema = new Schema(
  {
    title: {
      type:String,
      require:true
    },
    description: {
      type:String
    }
  }, 
  {timestamps: true}
)

module.exports = mongoose.model("task", TaskSchema)