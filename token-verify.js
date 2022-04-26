 const jwt = require('jsonwebtoken');

 const secret = 'myCat';
 const token = '';

 function varifyToken(token,secret) {
   return jwt.verify(token, secret);
 }

 const payload = varifyToken(token, secret);
 console.log(payload);
