# Principio de responsabilidad única

Es necesario darle responsabilidades propias a la clase/métodos.
Es decir, por qué la clase 'User' realiza manipulación del DOM? o envía peticiones al store? o incluso al a BD?

Lo necesario y común para la clase User son:
las propiedades del usuario, sus constructores, y sus métodos necesarios como los getters y setters 

#  Priorizar la composición frente a la herencia
Muchas veces la herencia da una capa de complejidad al código, como por ejemplo, la clase 'Manzana' que es hija de la clase 'Frutas Rojas', tiene todos los atributos de forma innecesaria del padre, y realiza acciones de más, así como también, dar lecturas compljeas. Es más sencillo y optimo crear una clase que instancie a la vez ambas clases como juntar pequeñas piezas de forma rápida, que jalar una cadena pesada  

# Estructura recomendada de una clase

**Comenzar con lista de propiedades.**
1. Propiedades estáticas.
2. Propiedades públicas.
3. Propiedades privadas.
4. __Recomendado__ ordenar alfabeticamente por grupos.

**Métodos**
1. Constructores estáticos
2. Luego el constructor principal
3. Constructor privado
4. Métodos estaticos
5. Métodos privador
6. Resto de métodos de instancia ordenados de mayor a menor importancia
7. Getters y Setters

