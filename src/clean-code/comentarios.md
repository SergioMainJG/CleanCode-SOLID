# Comentarios en código

Si nosotros aplicamos nuestros principios lógicos de 'clean code' ¿Por qué razón le dariamos comentarios explicativos a algo que obvio/autoexplicativo?

``//Este método regresa un usuario por su id``\
`` const getUser( id: idUser ): User =>{}``

El uso de comentarios en nuestro código es porque hay una excepción en nuestro código, no porque es reglamentario; por ejemplo, cuando estemos usando algo de terceros, sería mejor usar comentarios que una solución compleja, porque ese comentario da una explicación de lo que estamos **tratando de hacer**.

La mayoría de veces, si nuestro código necestia comentarios, es porque necesita ser refactorizado