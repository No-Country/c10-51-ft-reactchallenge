//Aqui estarán todas las funciones que se utilizaran durante el ruteo.

const { Restaurant, Users, Food, Order } = require('../db.js');


// Funciones de /rest

const restCreator = async (dataRest) => {
    try {
        const { name, img, email, adress, phone, shipping, user, description } = dataRest; // esto para el req.body en post
        let User = await Users.findAll({
            where: { id: user }
        })

        const newRest = await Restaurant.create({
            name,
            img,
            email,
            adress,
            phone,
            shipping,
            description
        });
        newRest.addUsers(User)
        return newRest

    } catch (error) {
        console.log("Error en funcion restCreator", error.message);
    }
};


const getRating = async (idRest) => {
    try {
 
        // Obtener todas las calificaciones de los usuarios para el restaurante con el id "restId"
        const allUsers = await Users.findAll();
        let qualifications = []
        for(let i = 0; i < allUsers.length; i++){
            for(let j = 0; j < allUsers[i].rating.length; j++){
                if(allUsers[i].rating[j].idRest == idRest)
                qualifications.push(allUsers[i].rating[j].qualification)
            }
        }
        const sum = qualifications.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
        const average = sum / qualifications.length;
        return parseFloat(average.toFixed(1))
    } catch (error) {
        console.log(`Error en getRating: ${error.message}`);
        return null;
    }
}


const getAllRest = async (category) => {
    try {

        const allRest = await Restaurant.findAll({
            include: {
                model: Food,
                attributes: ['id', 'name', 'img', 'price', 'description', 'categories'],
                throug: {
                    attributes: []
                }
            }
        })
        if (category) {
            const aux = [];

            for (let i = 0; i < allRest.length; i++) {
                const food = allRest[i].food;
                for (let j = 0; j < food.length; j++) {
                    const categories = food[j].categories;
                    if (categories.includes(category)) {
                        aux.push(allRest[i]);
                        break;
                    }
                }
            }

            return aux;
        } else {
            return allRest
        }
    } catch (error) {
        console.log('Error en getAllRest ', error.message)
    }
}



const getRestDetail = async (id, menu) => {
    const allRest = await getAllRest()

    /*
    El proximo condicional me permite emplear esta misma funcion tanto cuando
    buscaré un restaurante por su numero de id como para buscarlo por su nombre
    */

    if (typeof (id) === 'number' && !menu) {
        try {
            const rest = allRest.find(e => e.id === id)
            // console.log('numero ', pokemon)
            return rest
        } catch (error) {
            console.log('Error en getRestDetail con id numerico', error.message)
        }
    } else if (typeof (id) === 'string') {
        try {
            const rest = allRest.filter(e => e.name === id)
            if (rest.length > 0) {
                return rest
            } else {
                throw new Error("No se encuentra al restaurante")
            }
        } catch (error) {
            console.log('Error en getRestDetail con id string', error.message)
        }
    } else if (menu) {
        try {
            const rest = allRest.find(e => e.id === id)
            return rest.food
        } catch (error) {

        }
    }
}

const updateRest = async (idRest, updateInfo) => {
    try {
        const rest = await Restaurant.findByPk(idRest);
        console.log(`idRest=${idRest} - updateInfo=${updateInfo}`)
        await rest.update({
            ...updateInfo
        })
        return rest

    } catch (error) {
        console.log("Error en updateRest -->" + error.message)
    }
}




// Funciones de  /users

const getAllUsers = async () => {
    try {
        const allUsers = await Users.findAll({
            include: {
                model: Restaurant,
                attributes: ['id', 'name', 'img'],
                throug: {
                    attributes: []
                }
            }
        })
        return allUsers
        //Devuelve array con todos los restaurantes

    } catch (error) {
        console.log('Error en getAllRest ', error.message)
    }
}

const userCreator = async (dataUser) => {
    try {
        const { name, password, img, email, birthday ,address,phone} = dataUser; // esto para el req.body en post
        const aux1 = await getAllUsers()
        //Traigo los datos existentes en la base para corroborar que no se repita ningun pokemon
        const aux2 = aux1.find(e => e.name === name)


        const newRest = await Users.create({
            name,
            password,
            img,
            email,
            birthday,
            address,
            phone
        });
    } catch (error) {
        console.log("Error en funcion restCreator", error.message);
    }
};

const getUserDetail = async (id) => {
    const allUser = await getAllUsers()

    /*
    El proximo condicional me permite emplear esta misma funcion tanto cuando
    buscaré un restaurante por su numero de id como para buscarlo por su nombre
    */

    if (typeof (id) === 'number') {
        try {
            const user = allUser.find(e => e.id === id)
            // console.log('numero ', pokemon)
            return user
        } catch (error) {
            console.log('Error en getUserDetail con id numerico', error.message)
        }
    } else if (typeof (id) === 'string') {
        try {
            const user = allUser.filter(e => e.name === id)
            return user
        } catch (error) {
            console.log('Error en getUserDetail con id string', error.message)
        }
    }
}


const doRating = async (idUser, idRest, qualification) => {
    try {
        const user = await Users.findByPk(idUser);

        const newRating = [...user.rating, { idRest, qualification }];
        await user.update({ rating: newRating });

        console.log(`Calificación agregada para el usuario con ID ${idUser}`);
    } catch (error) {
        console.log(`Error en doRating: ${error.message}`);
    }
}

const favorites = async (idUser, idRest) => {
    try {
        const user = await Users.findByPk(idUser);
        const newFavorites = [...user.favorites, idRest]
        await user.update({ favorites: newFavorites })

    } catch (error) {
        console.log("Error en favorites: " + error.message)
    }
}

const noFavorite = async (idUser, idRest) => {
    try {
        const user = await Users.findByPk(idUser);
        const filteredFavorites = user.favorites.filter(e => e != idRest)
        const newFavorites = [...filteredFavorites]

        await user.update({ favorites: newFavorites })

    } catch (error) {
        console.log("Error en favorites: " + error.message)
    }
}

const includeTarget = async (idUser, target) => {
    try {
        const user = await Users.findByPk(idUser);
        const newTargets = [...user.targets, target]
        await user.update({ targets: newTargets })
    } catch (error) {
        console.log("Error en incluideTarget: " + error.message)
    }
}

const deleteTarget = async (idUser, number) => {
    try {
        const user = await Users.findByPk(idUser);
        const filteredTargets = user.targets.filter(e => e.number != number)
        const newTargets = [...filteredTargets]
        await user.update({ targets: newTargets })
    } catch (error) {
        console.log("Error en deleteTarget: " + error.message)
    }
}




// -----------Funciones de Food--------------------

const foodCreator = async (dataFood) => {
    try {
        const { name, img, price, description, categories, rest, promo } = dataFood; // esto para el req.body en post
        let Rest = await Restaurant.findAll({
            where: { id: rest }
        })
        const newFood = await Food.create({
            name,
            img,
            price,
            description,
            categories,
            promo
        });

        newFood.addRestaurant(Rest)
        return newFood


    } catch (error) {
        console.log("Error en funcion foodCreator", error.message);
    }
};



const getFood = async (idRest, category, minPrice, maxPrice, promo) => {
    try {
        let aux = await Food.findAll({
            include: {
                model: Restaurant,
                attributes: ['id', 'name', 'img'],
                throug: {
                    attributes: []
                }
            }
        })
        if (idRest) {
            aux = aux.filter(e => e.restaurants[0].id == idRest)
        }
        if (category) {
            aux = aux.filter(e => e.categories.includes(category))
        }
        if (minPrice) {
            aux = aux.filter(e => e.price >= minPrice)
        }
        if (maxPrice) {
            aux = aux.filter(e => e.price <= maxPrice)
        }
        if (promo) {
            aux = aux.filter(e => e.promo === true)
        }

        return aux
    } catch (error) {
        console.log('Error en getFood ', error.message)
    }

}

const getFoodDetail = async (id) => {
    const allFood = await getFood()

    /*
    El proximo condicional me permite emplear esta misma funcion tanto cuando
    buscaré una comida por su numero de id como para filtrarlo por su nombre
    */

    if (typeof (id) === 'number') {
        try {
            const food = allFood.find(e => e.id === id)
            // console.log('numero ', pokemon)
            return food
        } catch (error) {
            console.log('Error en getFoodDetail con id numerico', error.message)
        }
    } else if (typeof (id) === 'string') {
        try {
            const food = allFood.filter(e => e.name === id)
            return food
        } catch (error) {
            console.log('Error en getFoodDetail con id string', error.message)
        }
    }
}


const getCategories = async () => {
    const allFood = await Food.findAll()
    let categories = []
    allFood.forEach(e => {
        categories.push(...e.categories)
    });
    const uniqueCategories = categories.filter((element, index, array) => {
        return index === array.indexOf(element);
    });

    return uniqueCategories;
}

const updateFood = async (idFood, updateInfo) => {
    try {
        const rest = await Food.findByPk(idFood);
        await rest.update({
            ...updateInfo
        })
        return rest

    } catch (error) {
        console.log("Error en updateRest -->" + error.message)
    }
}

//-----------FUNCIONES ORDER-------------------


const createOrder = async (order) => {
    const { items, rest, user } = order
    let Rest = await Restaurant.findAll({
        where: { id: rest }
    })
    let User = await Users.findAll({
        where: { id: user }
    })
    let Foods = await Food.findAll({
        where: { id: items }
    })
    let newOrder = await Order.create({})

    newOrder.addRestaurant(Rest)
    newOrder.addUsers(User)
    newOrder.addFood(Foods)
    return newOrder
}

const getOrder = async (idOrder, idRest, idUser) => {
    if (idOrder) {
        let order = await Order.findAll({
            where: { id: idOrder },
            include: [
                {
                    model: Restaurant,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Food,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Users,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
        return order
    }
    let order = await Order.findAll({
        include: [
            {
                model: Restaurant,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            },
            {
                model: Food,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            },
            {
                model: Users,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }
        ]
    })
    if (idRest) {
        order = order.filter(e => e.restaurants[0].id == idRest)
    }
    if (idUser) {
        order = order.filter(e => e.users[0].id == idUser)
    }
    return order
}

const changeOrderState = async (task, idOrder) => {
    const order = await Order.findByPk(idOrder);

    if (task == "received") {
        order.update({
            order,
            received: true
        });
    } else if (task == "onWay") {
        order.update({
            order,
            received: true,
            onWay: true
        });
    } else if (task == "delivered") {
        order.update({
            order,
            received: true,
            onWay: true,
            delivered: true
        });
    }
}


//----------FUNCIONES SEARCHBAR-------------

function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length
    if (b.length === 0) return a.length

    const matrix = []


    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i]
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j
    }


    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1]
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Sustitución
                    matrix[i][j - 1] + 1, // Inserción
                    matrix[i - 1][j] + 1 // Eliminación
                )
            }
        }
    }

    return matrix[b.length][a.length]
}

const search = async (str) => {
    let allFood = await getFood()
    let allRest = await getAllRest()
    let foodAndRest = [...allFood, ...allRest]

    let searchResult = foodAndRest.filter(e => {
        const distance = levenshteinDistance(e.name, str)
        const includesWord = e.name.toLowerCase().includes(str.toLowerCase())
        const includesCategory = e.categories && e.categories.some(category =>
            levenshteinDistance(category, str) <= 4 ||
            category.toLowerCase().includes(str.toLowerCase())
        )
        return includesWord || distance <= 4 || includesCategory
    })

    return searchResult
}


//----------FUNCIONES PRELOAD-------------------

const preload = require("../preload.json")

const preloadUsers = async () => {

    try {
        let data = preload.users.map((user) => {
            return {
                name: user.name,
                password: user.password,
                img: user.img,
                email: user.email,
                birthday: user.birthday,
                address: user.address,
                phone: user.phone,
                favorites: user.favorites,
            };
        });

        for (const user of data) {
            userCreator(user);
        }
        return data;
    } catch (error) {
        console.log("ERROR EN preloadUsers", error.message);
    }
};

const preloadRest = async () => {

    try {
        let data = preload.rest.map((rest) => {
            return {
                name: rest.name,
                img: rest.img,
                email: rest.email,
                adress: rest.adress,
                phone: rest.phone,
                shipping: rest.shipping,
                user: rest.user,
                description: rest.description

            };
        });

        for (const rest of data) {
            restCreator(rest);
        }
        return data;
    } catch (error) {
        console.log("ERROR EN preloadRest", error.message);
    }
};

const preloadFood = async () => {

    try {
        let data = preload.food.map((food) => {
            return {
                name: food.name,
                img: food.img,
                price: food.price,
                description: food.description,
                rest: food.rest,
                categories: food.categories,
                promo: food.promo

            };
        });

        for (const food of data) {
            foodCreator(food);
        }
        return data;
    } catch (error) {
        console.log("ERROR EN preloadFood", error.message);
    }
};


const preloadOrders = async () => {

    try {
        let data = preload.order.map((order) => {
            return {
                items: order.items,
                rest: order.rest,
                user: order.user
            };
        });

        for (const order of data) {
            createOrder(order);
        }
        return data;
    } catch (error) {
        console.log("ERROR EN preloadOrders", error.message);
    }
};



module.exports = {
    //Funciones /rest
    restCreator,
    getAllRest,
    getRestDetail,
    getRating,
    updateRest,
    //Funciones /users
    doRating,
    userCreator,
    getAllUsers,
    getUserDetail,
    favorites,
    noFavorite,
    includeTarget,
    deleteTarget,
    //Funciones /food
    getFood,
    foodCreator,
    getFoodDetail,
    getCategories,
    updateFood,
    //Funciones /order
    createOrder,
    getOrder,
    changeOrderState,
    search,
    //Preloads
    preloadUsers,
    preloadRest,
    preloadFood,
    preloadOrders
}

