# Uniformidad en el proyecto
### Problemas similares, soluciones similares

La mayoría de veces, en nuestros proyectos, nuestro sistema va a manejar diferentes tipos de datos reales, como productos, usuarios, peticiones, etc.
En este caso, es necesario usar las mismas palabras claves con su distintivo.

¿Por qué no usar la palabra ``create__`` para nuestros métodos de creación de productos y usuario?\
- ``const  createProduct=()=>{}`` 
- ``const  createUser=()=>{}``

Ya que en ambas situaciones, se realizan casi el mismo proceso, y no solamente eso, en esencia hacen lo mismo.

Además, también esto se puede aplicar en la forma de hacer los directorios y archivos de nuestro sistema:

````
-
 |--RenderTable
               |--render-table.tsx
               |--render-table.css
 |--RenderHeader
               |--render-Header.tsx
               |--render-Header.tsx
````
### Identación 

Es necesario respetar la convención de la identación del equipo, como:
1. Identar por columnas
2. Identar por espacio visual de pantalla
3. Autoformateo
4. Identar por bloques de código
5. Identar si el lenguaje lo requiere