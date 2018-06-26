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
    const newMuse = await new MuseModel(req.body)
    user.muses.push(newMuse)
    return user.save()
  }).then(savedUser => {
    res.send({
      user: savedUser
    })
  })
})

module.exports = router;
