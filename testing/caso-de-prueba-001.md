### Caso de prueba: 001

Título:

 Verificación de la respuesta del servidor al enviar una solicitud GET a la ruta de comida

Objetivo:

Verificar si el servidor responde correctamente a la solicitud GET enviada a la ruta de comida y devuelve una 
respuesta con el status 200 y un JSON con las comidas.

Precondiciones:

La aplicación de servidor debe estar en ejecución.

El cliente debe tener acceso a la red local donde se encuentra el servidor.

El cliente debe tener instalado el cliente HTTP Thunder Client en Visual Studio Code.

Pasos:

1. Abra el cliente HTTP Thunder Client en Visual Studio Code.
2. Seleccione la opción "New Request" en el menú desplegable.
3. Seleccione "GET" como el método de solicitud HTTP.
4. Ingrese la URL "http://<host>:3001/food" en la barra de direcciones del cliente.
5. Haga clic en el botón "Send Request" para enviar la solicitud GET al servidor.
6. Verifique que la respuesta del servidor tiene un status 200.
7. Verifique que la respuesta del servidor contiene un JSON con las comidas.

Resultado esperado:

* La respuesta del servidor debe tener un status 200.
* La respuesta del servidor debe contener un JSON con las comidas.
