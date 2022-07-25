const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
require('dotenv').config({ path : './config/.env' });

const rateLimiter = require('express-rate-limit');
const limiter = rateLimiter({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 50,
	standardHeaders: true,
	legacyHeaders: false, })

const userRoutes = require('./routes/users');
const sauceRoutes = require('./routes/sauces');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Khouloudwalid24:ibrahimkechiche@cluster0.cwdvu.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
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
app.use('/api/sauces', sauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;