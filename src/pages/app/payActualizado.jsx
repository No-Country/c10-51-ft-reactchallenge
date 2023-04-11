// Intendo de poder actualizar la pagina de las tajetas de creditos. 


// import React from 'react'
// import { View, Text } from 'react-native'
// import { Ionicons } from '@expo/vector-icons';


// export default function payActualizado () {
//   return (
//     <View>
//         <Text>Hello, world!</Text>

//     </View>

//   )
// }

// import React, { useState, useEffect } from 'react'; // Importamos React y algunas funciones de React que vamos a utilizar más adelante
// import { View, Text, FlatList } from 'react-native'; // Importamos algunos componentes de React Native que vamos a utilizar más adelante
// import mongoose from 'mongoose'; // Importamos la biblioteca de mongoose

// const connectionString = 'mongodb://<usuario>:<password>@<servidor>/<base_de_datos>'; // Creamos una variable con la cadena de conexión a la base de datos
// mongoose.connect(connectionString); // Nos conectamos a la base de datos utilizando la cadena de conexión que acabamos de crear

// const App = () => { // Creamos un componente llamado App
//     const [menus, setMenus] = useState([]); // Creamos un estado llamado "menus" y una función para actualizarlo llamada "setMenus"

//     useEffect(() => { // Creamos un efecto que se ejecutará una vez, cuando se monte el componente
//         const fetchMenus = async () => { // Creamos una función asincrónica llamada "fetchMenus"
//             const Menu = mongoose.model('Menu', { // Creamos un modelo de datos utilizando la biblioteca mongoose, con un nombre "Menu"
//                 nombre: String, // Una propiedad llamada "nombre" que es una cadena de texto
//                 descripcion: String, // Una propiedad llamada "descripcion" que es una cadena de texto
//                 precio: Number, // Una propiedad llamada "precio" que es un número
//                 nutricion: Object // Una propiedad llamada "nutricion" que es un objeto
//             });
//             const result = await Menu.find(); // Realizamos una consulta a la base de datos utilizando el modelo "Menu" que acabamos de crear
//             setMenus(result); // Actualizamos el estado "menus" con los resultados de la consulta
//         };
//         fetchMenus(); // Llamamos a la función "fetchMenus" que acabamos de crear
//     }, []); // Indicamos que el efecto se ejecutará una vez, cuando se monte el componente

//     return (
//         <View>
//             <FlatList // Creamos un componente FlatList para mostrar los datos
//                 data={menus} // Le pasamos los datos que queremos mostrar
//                 renderItem={({ item }) => ( // Creamos un componente que se encargará de renderizar cada elemento de la lista
//                     <View>
//                         <Text>{item.nombre}</Text> // Mostramos el nombre del menú
//                         <Text>{item.descripcion}</Text> // Mostramos la descripción del menú
//                         <Text>{item.precio}</Text> // Mostramos el precio del menú
//                         <Text>{JSON.stringify(item.nutricion)}</Text> // Mostramos la información nutricional del menú
//                     </View>
//                 )}
//                 keyExtractor={(item) => item._id} // Le indicamos a FlatList cómo generar las claves de cada elemento de la lista
//             />
//         </View>
//     );
// };

// export default App; // Exportamos el componente App para que pueda ser utilizado en otros archivos
