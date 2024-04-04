# Acrónimo STUPID
## 6 code smells que debemos evitar.

1. **S**ingleton: patrón singleton.
2. **T**ight Coupling: alto acoplamiento.
3. **U**ntestability: código no probable (pruebas unitarias).
4. **P**remature optimization: optimizaciones prematuras
5. **I**ndescriptive Naming: nombres pocos descriptivos
6. **D**uplication: duplicidad de códgio, lo opuesto al principio DRY

### Singleton

- Pros
1. Garantiza una única instancia a lo largo de la app
- Contras
1. Vive en el contexto global
2. Modificado por cualquiera y en cualquier momento
3. No es rastreable
4. Difícil de testear por su ubicación

### Tight Coupling

Lo ideal es tener bajo acoplamiento y buena cohesión.\
Alto Acoplamiento da:
1. Efecto dominó en el cambio de uno/varios módulos
2. El ensamblaje de módulos puede requerir más esfuerzo debido a la dependencia extrema entre módulos
3. Un módulo en particular puede ser muy dificil de reutilizar y/o probar

Queremos diseñar componentes que sean autonomos en la medida de lo posible.

La baja cohesión significaría que la clase realiza una gran variedad de acciones. La alta cohesión significa que la clase se enfoca en lo que debería estar haciedo

### Untestability

Es difícil testear los siguientes tipos de código:
1. Código con alto acoplamiento.
2. Código con muchas dependencias no inyectadas.
3. Dependencias en el contexto global (Tipo Singleton)

### Premature Optimization

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es importante en una aplicación.\
No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir una **complejidad accidental**
#### Complejidad Accidental y Complejidad Esencial

La complejidad accidental es cuando damos soluciones complejas a la mínima indispensable: Usar una integral compuesta para calcular el área de un rectangulo simple.\
La complejidad esencial es inherente al problema.\
Debemos tener el criterio de saber que hacer optimamente para resolver el problema sin aumentar su dificultad

### Indescriptive Naming

1. Nombres de variables mal nombradas
2. Nombres de clases genéricas.
3. Nombres de funciones mal nombradas.
4. Ser muy específico o demasiado genérico
**La única medida para la complejidad del códgo es cuantas veces decimos WTF por minuto**

### Duplication

En donde el principio DRY es inexistente, pero hay dos tipos:
**Real**
1. Código es idéntico, y cumple la misma función.
2. Un cambio implicaría actualizar todo el códgio idéntico en varios lugares.
3. Incrementa posibilidades de error humano al olvidar una parte para actualizar.
4. Mayor cantidad de pruebas innecesarias.
**Accidental**
5. Código que luce similar pero cumple funciones distintas.
6. Cuando hay un cambio, sólo hay que modificar un sólo lugar
7. Este tipo de duplicidad se puede trabahar parámetros u optimizaciones

### Otros code-smells

- Inflación: Cuando un método/clase tiene muchas líneas de código, claramente, su resolución es aplicando el principio de responsabilidad única.
- Obsesión primitiva: Surge cuando se quiere solucionar problemas con primitvos, dando paso a una inflación excesiva, siendo su resolución, la creación de objetos,
- Lista larga de parámetros: Si un método necesita más de 3-4 argumentos para ser ejecutado, eso ímplica que con que un valor falte, todo el proceso se irá el demonio. Si dividimos esto en otras filas, para asignar las responsabilidades sin afectar tanto al sistema.

### Los Acopladores

- Envidia de otras caracteristicas: Si el método hace demasiadas llamadas externas a su módulo, provocando que la refactorización sea más insastifactoria.
- Intimidad inapropia: Cuando muchas clases utilizan los elementos, propiedades de otras clases, cuando debería ser lo opuesto, que las buenas clases deben saber poco o nada de otras clases.
- Cadenas de mensajes: Si una función A llama a B, que a su vez llama a C, y asi de forma sucesiva, provoca que cualquier cambio tenga un efecto severo en toda esta cadena o canal de comunicación.
- The Middle Man: Si una función/clase solamente existe para delegar una necesidad a otra, lo cuál hace que su existencia solamente sea innecesaria.
