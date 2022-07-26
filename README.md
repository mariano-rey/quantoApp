# Test de React Native

Mas allá de la validez de la solución, se desea un código entendible, manejable y performante.

- **Requerimientos:** indica lo que se debe obtener como resultado
- **Evaluación:** los puntos que se tendrán en cuanta para evaluar la solución.

**OBS**: en caso de no especificarse detalles, el desarrollador puede implementar la solución como mejor le parezca teniendo en cuanta los
Requerimientos y la Evaluación.

## Listado de Usuarios

> App en React Native 0.68.2 con React Hooks/Redux/Redux-thunk/React Navigation

Primeramente, debes instalar (si no lo tienes aún) React Native en tu computadora, siguiendo los pasos de su [página oficial](https://reactnative.dev/docs/environment-setup) utilizando **react-native-cli**.

Para este test utilizaremos un fake api que puedes encontrarlo [aquí](https://reqres.in/). No necesita crearse ninguna cuenta, basta con consumir sus distintos endpoints, la que utilizaremos en este test son:

- Listado de usuarios: Endpoint con un listado simple de usuarios
  - Metodo: GET
  - URL: https://reqres.in/api/users
  - Query params:
    ```ts
    page: number;
    per_page: number;
    ```
- Detalle de usuario: Endpoint con los datos de un usuario especificado en la url.
  - Metodo: GET
  - URL: https://reqres.in/api/users/{id}

### Resultado esperado:

<a href="./assets/UserList.jpg">
  <img src="./assets/UserList.jpg" width="150">
</a>&nbsp;
<a href="./assets/UserDetail.jpg">
  <img src="./assets/UserDetail.jpg" width="150">
</a>

### Requerimientos:

- Usar React Native CLI, no Expo.
- Utilizar Functional Components.
- Utilizar React Hooks.
- Obtener y manejar la informacion de usuarios mediante redux y redux-thunks.
- Dibujar el listado de usuarios mediante el componente [FlatList de React native](https://reactnative.dev/docs/flatlist).
- Al presionar en un registro, redirigir a una nueva pantalla con los detalles del usuario presionado (como en la imagen de la derecha mostrado más arriba).
- Para la navegacion, utilizar los hooks [React Navigation](https://reactnavigation.org/) en su version 6.X.
- Mostrar adecuadamente informacion del estado de una solicitud asīncrona al usuario, es decir, manejar los posibles estados de la solicitud: en proceso, fallido, obtenido correctamente.

### Evaluación:

- Lifecycle de componentes: Utilizar correctamente las instancias de renderizado de los componentes. NO USAR METODOS DEPRECADOS.
- Atomicidad de componentes: Los componentes hijos deben contener la menor cantidad de lógica posible y realizar un renderizado/acción específica.
- Utilizar correctamente Hooks.
- Optimizar al máximo el componente FlatList de React Native.
- Utilización correcta de estilos: Especialmente en la maquetación de componentes.
- Escalado de componentes: Utilizar [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) y aplicar su escalado horizontal o vertical segun sea necesario.
- Buena estructura del proyecto, con la ideología de un posible crecimiento en el mismo.
- Atomicidad de commits en el repositorio.
- Agregar Unit Test con Snapshots en los componentes.
