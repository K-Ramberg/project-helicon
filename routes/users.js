var express = require('express');
var router = express.Router();
const { UserModel } = require('../db/schema')

router.get('/', async (req, res) => {
  const users = await UserModel.find()
  res.send({
    users
  })
})

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.send({
    user
  })
})


router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})

router.patch('/:id', async (req, res) => {
  const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new:true })
  res.send(updatedUser)
})

module.exports = router;
