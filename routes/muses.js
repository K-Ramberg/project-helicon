var express = require('express');
var router = express.Router({mergeParams: true});
const { UserModel, MuseModel } = require('../db/schema')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', async (req,res) => {
  const user = await UserModel.findById(req.params.userId)
  const muse = await user.muses.id(req.params.id)
  res.send({
    user,
    muse
  })
})

module.exports = router;
