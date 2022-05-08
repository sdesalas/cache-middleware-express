const memcache = require('memory-cache');

module.exports = function cache(seconds) {
  return (req, res, next) => {
    let key = `__cache-middleware-express:${req.originalUrl || req.url}`;
    let hit = memcache.get(key);
    if (hit) {
      for (const k of Object.keys(hit.headers)) {
        res.header(k, hit.headers[k]);
      }
      return res.send(hit.body);
    }
    const __send = res.send;
    res.send = function () {
      console.log();
      memcache.put(key, {
        headers: res.getHeaders(),
        body: arguments[0]
      }, seconds*1000);
      __send.apply(this, arguments);
    }
    next();
  };
};
