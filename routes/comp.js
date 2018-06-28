var express = require('express');
var router = express.Router({ mergeParams: true });
const { UserModel, MuseModel, CompositionModel } = require('../db/schema')

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)
  const muse = await user.muses.id(req.params.id)
  res.send({
    user,
    muse
  })
})

router.post('/', (req, res) => {
  UserModel.findById(req.params.userId).then((user) => {
    const newMuse = new MuseModel(req.body)
    user.muses.push(newMuse)
    return user.save()
  }).then(savedUser => {
    res.send({
      user: savedUser
    })
  })
})

router.patch('/:id', async(req, res) => {
  const user = await UserModel.findById(req.params.userId)
  const editedMuse = user.muses.id(req.params.id)
    editedMuse.name = req.body.name
    editedMuse.description = req.body.description
    editedMuse.keySignature = req.body.keySignature
    editedMuse.timeSignature = req.body.timeSignature
    editedMuse.tempoBps = req.body.tempoBps
    editedMuse.tuningHz = req.body.tuningHz

    const savedUser = await user.save()
    res.send({
      user: savedUser
    })
})

router.delete('/:id', async (req,res) => {
  const user = await UserModel.findById(req.params.userId)
  user.muses.id(req.params.id).remove()
  const savedUser = await user.save(
    res.send(
      "goodbye"
    )
  )
})

module.exports = router;