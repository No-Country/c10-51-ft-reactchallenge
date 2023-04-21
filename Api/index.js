require('dotenv').config()
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preloadUsers, preloadRest, preloadFood, preloadOrders } = require('./src/routes/utils.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    preloadUsers()
    setTimeout(()=>{
      preloadRest()
    },1000)
    setTimeout(()=>{
      preloadFood()
    },2000)
    setTimeout(()=>{
      preloadOrders()
    },3000)
    

    console.log(`Server on 3001`); 
  });
});

