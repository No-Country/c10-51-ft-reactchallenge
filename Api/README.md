Utilización de rutas:

# RESTAURANTES

## rest/

Si se utiliza solo se obtiene un array con todos los restaurantes en base de datos.

## rest/1

Cuando se coloca un número seguido de `"rest/"` se obtiene un detalle del restaurante que tenga un id igual al número

## rest/?category=Comida Rápida

Devuelve un array con todos los restaurantes que sirvan comidas con categoria `"Comida Rápida"`


## rest/restCreator

Esta ruta es la que se emplea para la creación de restaurantes
El objeto que debe recibir debe tener el siguiente formato:

{

    name: STRING,
    img: STRING,
    adress: STRING,
    phone: NUMBER,
    shipping: NUMBER,
    description: TEXT,
    user: [1] ----> id del usuario administrador
}


## rest/rating/1

Devuelve el promedio de calificaciones hechas por los usuarios del restaurante con id `1`

## rest?category=Pizza

Devuelve array con todos los restaurantes que sirvan comida de categoria Pizza.

## rest/edit?idRest=1

Edita la información de un restaurante existente. Se le debe pasar por body un objeto del siguiente formato:

{
    

        propiedad a modificar: Valor de la propiedad modificada 
}

## rest/rating/1

Devuelve el promedio de rating del restaurante con `id = 1`

## rest/delete/1

Borra de la base de datos el restaurante de `id = 1` y todas las comidas relacionadas al mismo.


# COMIDA

## food/

Si se utiliza solo se obtiene un array con todas las comidas en base de datos.

Pero a su vez se le pueden aplicar querys para filtrar los valores. Por ejemplo:

`?idrest=1`   ----> entrega array de comidas pertenecientes al restaruante de id = 1

`?category=Pizza`   ----> entrega array de comidas pertenecientes a la categoria "Pizza"

`?minprice=1000`  o  `?maxprice=2000`   ----> entrega array con las comidas que estén en ese rango de precios

`?promo=1`  ----> En este caso no es requisito que sea "1", puede ser cualquier cosa mientras que retorne un valor true. Entrega array con comidas que tengan propiedad promo en true.

Todas son combinables. Para combinarlas se debe emplear `"&"` de la siguiente forma:

`"food?idrest=2&category=Hamburguesa&minprice=1000&maxprice=3000"`

En el ejemplo se obtendría un array de las comidas pertenecientes al restaurant cuya "id" sea igual a 2, que posean categoria "Hamburguesa" y que su precio esté entre 1000 y 3000.

## food/foodCreator

Esta ruta es la que se emplea para la creación de comidas
El objeto que debe recibir debe tener el siguiente formato:

{

    name: STRING,
    img: STRING,
    price: INTEGER,
    description: TEXT,
    categories: ["Categoria1", "Categoria2"],
    promo: false
    rest: [1]  ----> id del restaurante que sirve esa comida
}

Se le puede colocar infinitas categorias y la propiedad promo solo es necesaria si se coloca en true. De lo contrario se puede omitir.

## /food/categories

Traerá un array con las categorías disponibles

## /food/2

Traerá un detalle de la comida cuyo id sea igual a 2

## food/edit?idFood=1

Edita la información de una comida existente. Se le debe pasar por body un objeto del siguiente formato:

{
    

        propiedad a modificar: Valor de la propiedad modificada 

}


## food/delete/1

Borra de la base de datos la comida de `id = 1`


# USUARIOS

## /users/

Trae array con todos los usuarios en base de datos

## users/1

Trae detalle del usuario con id = 1

## users/rating

Ruta de comando `PUT`, agrega una puntuación a un restaurante. Se le debe colocar por querys userId y restId respectivamente y por body enviar el siguiente objeto:

{

    qualification: NUMBER
}

La ruta finalmente debe poseer este formato:

`users/rating=idUser=1&idRest=1`

Con esta ruta estariamos colocando la calificación al restaurante de `id = 1` desde el usuario de `id = 1`

## users/userCreator

Ruta de creación de usuarios. Se le debe pasar un objeto del siguiente formato:

{

    name: STRING,
    password: STRING,
    img: STRING,
    email: STRING,
    birthday: DATE
}

## users/updateFavorites?idUser=1&idRest=1

Ruta para agregar favoritos a usuario. idUser = id del usuario a actualizar. idRest = id del restaurante a agregar.

## users/noFavorite?idUser=1&idRest=1

Ruta para quitar un favorito a usuario. idUser = id del usuario a actualizar. idRest = id del restaurante a agregar.

## users/updateTargets?idUser=1

Ruta para agregar una tarjeta por body para realizar compras. El objeto por body debe ser de la siquiente manera:

{

    "number": INTEGER
    "name": STRING
    "lastname": STRING
    "exp": STRING  (Formato XX/XX - mes/año)
    "code": INTEGER
}

## users/deleteTarget?idUser=1&target=4352123412341234

Ruta para eliminar del usuario con `id=1` la tarjeta con número `4352123412341234`


## users/delete/1

Borra de la base de datos el usuario de `id = 1` y todas los restaurantes relacionados al mismo.


# ORDENES - PEDIDOS

## order/

Traerá un array con todas las ordenes en base de datos. A su vez se le pueden aplicar querys

`?idOrder=1` ------------>  Traerá un array que contenga la orden pedida con el id 1

`?idRest=1` ------------->  Filtrará el array con las ordenes que sean solo del restaurante con el id 1

`?idUser=1` ------------->  Filtrará el array con las ordenes que sean solo del usuario con el id 1

idRest e idUser son combinables, de esta forma se pueden obtener todos los pedidos que un usuario haya realizado a un restaurante en particular.

## order/orderCreator

Ruta de creación de ordenes. Se le debe pasar un objeto con el siguiente formato:

{

    items: [1,2,3] ------> Id de las comidas pedidas
    rest: [2],   ------> Id del restaurante
    user: [2]    ------> Id del usuario que realiza el pedido
}

Algo importante de aclarar es que las ordenes tienen tres propiedades que por default están en false.

{
    received: false  (recibido),
    onWay: false     (en camino),
    delivered: false (entregado),
}

Estos estados pueden cambiar utilizando las siguientes rutas

`order/received?idOrder=1`

`order/onWay?idOrder=1`

`order/delivered?idOrder=1`

Cada una modifica a la propiedad correspondiente de la orden a la que pertenezca el id pasado por query. Transformando el booleano a true.

# BUSQUEDA

## search/:string


Traerá un array con todo lo que se asemeje al texto dentro del mismo, tanto comidas como restaurantes
Si un restaurante tiene Pizza en el nombre y hay comidas que tengan pizza en el nombre traerá ambas cosas. Se pueden diferenciar por sus propiedades.

# CARRITOOOOOOO

Esta cuestión tiene diezmil funcionalidades asi que lean atentamente plz

Esto es muy propenso a buguear la experiencia de usuario por lo tanto creé varias cosas para mantenerlo lo más seguro posible.

Primero se debe crear un carrito en base de datos, es muy importante que se cree y se destruya cuando se termine la compra o se salga de la aplicación, o se salga del restaurante.

Para crear se usa la siguiente ruta:

## /cart/creator?idUser=1

Se debe especificar el id del usuario que está realizando la compra. De esta forma se crea en db un objeto con propiedad "user" cuyo valor es el id que le pasamos y otra propiedad llamada "cartIn" que es un array al cual le pasaremos objetos que serán las comidas que el usuario irá sumando.

## /cart/add?idUser=1&idFood=1

/add agregará una unidad de la comida que le especifiquemos al carrito del usuario que le especifiquemos. Se puede agregar varias veces la misma comida.

## /cart/sub?idUser=1&idFood=1

/sub es la acción contraria a la ruta anterior. Esta elimina una unidad de la comida que le especifiquemos.

## /cart/amount?idUser=1&idFood=1

Esta ruta devuelve el número de veces que una comida está en el carrito del usuario.

## /cart/total?idUser=1

Esta devuelve la suma de los precios de todas las comidas en el carrito del usuario.

# RUTA SUMAMENTE IMPORTANTE

Ruta de eliminación del carrito. `Es importante que esta ruta se asegure de alguna forma que se va a utilizar`. Ya que si el carrito no se elimina producirá errores en la aplicación. Aunque la compra se termine o no es importante que el carrito sea eliminado en algún momento.

## /cart/restart/:idUser

`idUser` es claramente el id del usuario que está realizando la compra.
<br>
<br>
<br>
<br>
<br>


Sin más que agregar, este es el back del proyecto.


<img src="https://media.tenor.com/L4CcAh4ljlwAAAAM/good-night-cute.gif"/>

A mimir

