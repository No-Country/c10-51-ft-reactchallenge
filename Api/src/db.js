require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY
} = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/deliverynocountry`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Restaurant, Users, Food, Order} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Relación User - Restaurant

Users.belongsToMany(Restaurant, {through: "restaurant_users"});
Restaurant.belongsToMany(Users, {through: "restaurant_users"});

//Relación Food - Restaurant

Restaurant.belongsToMany(Food, {through:"restaurant_food"});
Food.belongsToMany(Restaurant, {through: "restaurant_food"});

//Relación Order - Restaurant

Restaurant.belongsToMany(Order, {through:"restaurant_order"});
Order.belongsToMany(Restaurant, {through: "restaurant_order"});

//Relación Order - User

Users.belongsToMany(Order, {through:"users_order"});
Order.belongsToMany(Users, {through: "users_order"});

//Relación Order - Food

Food.belongsToMany(Order, {through:"food_order"});
Order.belongsToMany(Food, {through: "food_order"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
