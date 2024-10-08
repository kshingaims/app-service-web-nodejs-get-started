var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("--- test ---");
  console.error("--- error ---")
  res.render('index', { title: 'Express' });
});

router.get('/wait', async (req, res) => {
  const requestData = req.body;
  await new Promise(resolve => setTimeout(resolve, 3 * 60 * 1000));
  res.status(200).send('Waited for 3 minutes');
});

module.exports = router;
