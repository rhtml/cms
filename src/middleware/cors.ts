const whitelist = [
  process.env.PAYLOAD_PUBLIC_APP_URL,
];

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (Array.isArray(whitelist) && whitelist.indexOf(req.headers.origin) > -1) {
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  next();
};

module.exports = cors;
