var express = require('express');
var router = express.Router();
const os = require('os');

const networkInterfaces = os.networkInterfaces();
const ipv4Interfaces = networkInterfaces['Ethernet'].filter(interface => interface.family === 'IPv4');
const ipv4Address = ipv4Interfaces[0].address;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/wait', async (req, res) => {
  const requestData = req.body;
  await new Promise(resolve => setTimeout(resolve, 3 * 60 * 1000));
  res.status(200).send('Waited for 3 minutes: ' + ipv4Address);
});

module.exports = router;
