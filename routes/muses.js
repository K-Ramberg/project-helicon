var express = require('express');
var router = express.Router({ mergeParams: true });
const { UserModel, MuseModel } = require('../db/schema')


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

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
  const museId = req.params.id
  const editedMuse = user.muses.id(museId)
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

module.exports = router;