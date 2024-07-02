const jwt = require('jsonwebtoken');
const { LoopsClient } = require("loops");
const secretKey = process.env.SECRET_KEY;

const loops = new LoopsClient(process.env.LOOPS_KEY ?? "");

const generateRoute = (req, res) => {
  const { email } = req.body.email;
  const token = jwt.sign({ email }, secretKey, { expiresIn: '60s' });
  res.json({ token });
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
};

const subscribeRoute = async (req, res) => {
  const { email } = req.body;
  const resp = await loops.createContact(email);
  res.status(200).send(resp);
};

const newsletter = (app) => {
  app.post('/subscribe', verifyToken, subscribeRoute);
};

module.exports = {
  generateRoute,
  newsletter,
};