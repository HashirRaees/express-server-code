const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorization = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token)
    return res.status(401).json({ message: 'Unauthorized: No token found' });

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = { authorization };
