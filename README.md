# cache-middleware-express

A memory caching middleware for express. 

Sample usage
--------------

```javascript
const cache = require('cache-middleware-express');
const express = require('express');

const app = express();

// This route should cache for about about 30 seconds
app.get('/some/api/url', cache(30), (req, res) => ...)

// This route should cache for about a minute and a half
app.get('/some/api/url', cache(90), (req, res) => ...)

// This route should cache for an hour
app.get('/some/api/url', cache(60*60), (req, res) => ...)
```
