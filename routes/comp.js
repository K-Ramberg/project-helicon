var express = require('express');
var router = express.Router({ mergeParams: true });
const { UserModel, MuseModel, CompositionModel } = require('../db/schema')

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)
  const muse = await user.muses.id(req.params.museId)
  const comp = await muse.compositions.id(req.params.id)
  res.send({
    user,
    muse,
    comp
  })
})

// router.post('/', (req, res) => {
//   UserModel.findById(req.params.userId).then((user) => {
//     const newMuse = new MuseModel(req.body)
//     user.muses.push(newMuse)
//     return user.save()
//   }).then(savedUser => {
//     res.send({
//       user: savedUser
//     })
//   })
// })

router.patch('/:id', async(req, res) => {
  const user = await UserModel.findById(req.params.userId)
  const muse = await user.muses.id(req.params.museId)
  const editedComp = muse.compositions.id(req.params.id)
    editedComp.name = req.body.name
    editedComp.notePlaces = req.body.notePlaces
    const savedUser = await user.save()
    res.send({
      user: savedUser
    })
})

router.delete('/:id', async (req,res) => {
  const user = await UserModel.findById(req.params.userId)
  const muse = await user.muses.id(req.params.museId)
  muse.compositions.id(req.params.id).remove()
  const savedUser = await user.save()
    res.send({
        user: savedUser,
        muse
    })
})

module.exports = router;