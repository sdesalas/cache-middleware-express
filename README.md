# cache-middleware-express

A memory caching middleware for express. 

Usage
--------------

```javascript
const express = require('express');
const cache = require('cache-middleware-express');

const app = express();

// Cache single route for 30 seconds
app.get('/some/api/url', cache(30), (req, res) => ...)

// Cache single route for an hour
app.get('/some/api/url', cache(60*60), (req, res) => ...)

```
