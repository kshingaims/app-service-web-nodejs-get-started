var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/wait', async (req, res) => {
  const requestData = req.body;
  await new Promise(resolve => setTimeout(resolve, 60 * 1000));
  res.status(200).send('Waited for 3 minutes');
});

module.exports = router;
