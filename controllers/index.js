import express from 'express'
import fs from 'fs'
import path from 'path'

const router = express.Router()

console.log("#Init Controllers!!")
let files = fs.readdirSync("./controllers")
files.forEach(function(file) {
  let nameController = path.parse(file).name
  console.log(nameController, nameController != "index" && nameController != "root")
  if(nameController != "index" && nameController != "root") {
    console.log("hereh")
    // router.use(() => importDy(nameController))
    router.use(require('./' + nameController))
  }
})

module.exports = router