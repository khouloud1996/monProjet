const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
const {initDb} = require('./config/sequelize');

const rateLimiter = require('express-rate-limit');
const limiter = rateLimiter({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 50,
	standardHeaders: true,
	legacyHeaders: false, });

const userRoutes = require('./routes/users');


  
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(helmet({
  crossOriginResourcePolicy: { policy: "same-site" }
}));
app.use(limiter);
app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.listen(3000,async()=>{
  console.log('server is up');
  await initDb();
})}
module.exports = app;
