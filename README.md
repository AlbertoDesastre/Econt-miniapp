#Dropdown Skeleton

Se supone que el Skeleton es para cuando no ha terminado de cargar la llamada a la API. Ahora mismo es un componente estatico que esta por estar.
Pendiente de renderizarlo solo cuando la llamada a la API haya sido terminada.

# Bugs

- Va muy lento el buscador de Ciudades. Revisar articulo de Kent, React, y sus ejemplos de manejar el estado.

- Si pongo las ciudades en minuscula no aparecen. Algo no funciona cuando se pone el searchValue en minuscula.

- Si abro la pagina y le doy muy rapido al boton de Search no se muestra ni el Dropdown Skeleton ni nada hasta que se haya terminado de cargar. Eliminar condicionales a priori innecesarios y luego meterlos con cabeza

# Pendientes.

- Modulo usuario:
  Filtrar las direcciones, por ejemplo de Plovdiv. HECHO
  Filtrar las ciudades en base a un JSON de usuario.
  Guardar lista de usuarios en Cache.
  Poder poner en activo uno de esos usuarios, mediante el id (simulando login)
  Dejarme seleccionar usuario con un prompt o form.
  Que las ciudades se filtren automaticamente segun la ciudad que tiene seleccionado el usuario.
  Hacer otra llamada a la api pero con las oficinas mas cercanas
  Poder desplegar informacion del usuario activo

- Modulo API:
  Crear un dropdown para que el usuario elija ciudades, oficinas en X ciduades, y calles.
  Que el usePostApi haga otra llamada en base a la elección del usuario.
  Desplegar todas las oficinas segun los requerimientos del método.
  Filtrar oficinas/ciucades por el input.

- Importante!!
  Para qeu las llamadas a la API y el dropdown sean muy veloces, podemos hacer la primera llamada con todas las ciudades como recomienda Econt, 1 vez al día. Luego, cuando el usuario entre en la pestaña de compra, hacer el filtrado de la ciudad que tiene guardada en su perfil.

De tal forma que cuando vaya al menu de dropdown, no tengamos que hacer ningun llamado a la API y solo lo hayamos tenido que hacer una vez.

Por supeusto se le dara la opcion de "elegir ciudad" al usuario en la pantalla de compra por si quiere cambiar de ciudad...

Otra posibilidad es que siempre se realice un checkeo de la ciudad del usuario y, cuando esta cambie, hacer de nuevo el filtro de las oficinas segun la ciudad de su perfil.
...

# Pendientes de SCSS

Hacer responsive en Mobile, poniendo el botón de search debajo de los inputs del usuario, para que no ocupe demasiado de ancho.

Buscar alguna manera de que no se vea horrendo en PC
