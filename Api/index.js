const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preloadUsers, preloadRest, preloadFood, preloadOrders, doRating } = require('./src/routes/utils.js')


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
    setTimeout(()=>{
      doRating(1,1,1)
      doRating(2,1,3)
      doRating(1,2,2)
      doRating(2,2,4)
      doRating(1,3,3)
      doRating(2,3,1)
      doRating(1,4,3)
      doRating(2,4,5)
      doRating(1,5,4)
      doRating(2,5,3)
    },4000)

    console.log('%s listening at 3003'); // eslint-disable-line no-console
  });
});


