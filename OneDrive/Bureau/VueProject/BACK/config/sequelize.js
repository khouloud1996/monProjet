const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_khouloud', 'root', '', {
    host: 'localhost',
    dialect:  'mysql',
  });
  
  const initDb = async()=>{
    try{
        await sequelize.authenticate() ;
        console.('Database connected')
    }catch(error){
        console.error(error)
    }
  }

  const getDb=() => sequelize
  
  module.exports={
    initDb,
    getDb
  }