# Los Principios S.O.L.I.D.

Los principios SOLID nos indicann cómo organizar nuestras estructuras de datos en componentes y cómo dicos componentes deben estar **interconectados**.

1.**S**ingle Responsability: Responsabilidad única.
2.**O**pen and close: Abierto y cerrado.
3.**L**iskov substitution: Sustitución de Liskov.
4.**I**nterface segregation: Segregación de interfaz.
5.**D**ependecy inversion: Inversión de dependencias.

## SRP - Principio de Responsabilidad única

Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo,

### Detectar Violaciones del SRP

1. Nombres de clases y módulos demasiado genéricos
2. Cambios en el código suelen afectar la clase o módulo para adaptarla al nuevo cambio
3. La clase involucra mútliples capas
4. Número elevado de importaciones
5. Cantidad elevada de métodos públicos
6. Excesivo número de líneas de código

## O&C - Open and close

Este principio establece que las entidades de software deben estar abiertas a la extensión, pero cerradas para la codificación.\
Se puede lograr de muchas formas, como por el uso de herencia, patrones de diseño.

### Detectar Violaciones del O&C

1. Cambios normalmente afectan nuestra clase o módulo.
2. Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)


## LS - Liskov substitution

Las funciones que utilicen punteros o referencias a clase base deben ser capaces de usar objetos de clases derivadas sin saberlo.\
Siendo U un subtipo de T, cualquier instancia de T debería ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema.

## ISP - Interface segregation

Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no usan.

### Detectar Violaciones del ISP

1. Si las interfaces nos obligan a violar los principios de Responsabilidad única y LS, entonces también estemos violando el principio ISP.


# DI - Dependecy Inversion

1. Los módulos de alto nuvel no deben depender de módulos de bajo nivel. O dicho de otra forma, a que los módulos exteriores no dependan de los módulos lógicos. O mejor dicho, el front-end no debe de dictar la lógica de negocio.
2. Ambos deben depender de las abstracciones. Las abstracciones, como las clases abstractas o las interfaces dictan como se van a comportar las otras clases. Uno de los motivos más importantes por el cual las reglas del negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta la tolerancia al cambio.
3. Las abstracciones no deben depender de concreciones.
4. Los detalles deben depender de abstracciones

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio. Los menos importantes son los que están cercanos a la infraestructura, es decir, aquellos relacionados al UI, la persistencia, la comunicación con API.

