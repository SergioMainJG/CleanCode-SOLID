# Lineamientos para la declaración de variables

## Nombres prounciables y expresivos
 Los nombres deben ser pronunciables y lo suficientemente expresivos:

**malo**```  const n = 53;```\
**malo**```  const tx = 0.15;```\
**malo**```  const category = 'T-Shirts';```\
**malo**```  const ddmmyy = new Date('August 15, 1965 0:00:00');```

**mejor**```  const numberOfUnits = 53; ```\
**mejor**```  const tax = 0.15; ```'\
**mejor**```  const category = 'T-Shirts'; ```\
**mejor**```  const birthDate = new Date('August 15, 1965 00:00:00');```

A su vez, no tienen que ser redundantes o que expresen tan explicitamente lo que se está usando, cuando ya hay una forma obvia de saber con que se está trabajando:

**malo**```  class AbstractUser {}; ```\
**malo**```  class UserMixin {}; ```\
**malo**```  class UserImplementation {}; ```\
**malo**```  interface UserInterface {}; ```

**mejor**```  class User {}; ```\
**mejor**```  interface User {}: ```

## Nombres según el tipo de dato

### Arreglos
**malo**``` const fruit = ['manzana', 'platano', 'fresa'];```\
**regular**``` const fruitList = ['manzana', 'platano', 'fresa'];```\
**bueno**``` const fruits = ['manzana', 'platano', 'fresa'];```\
**mejor**``` const fruitNames = ['manzana', 'platano', 'fresa'];```

### Booleanos
**malo**```  const open = true; ```\
**malo**```  const write = true; ```\
**malo**```  const fruit = true; ```\
**malo**```  const active = true; ```\
**malo**```  const noValues = true; ```\
**malo**```  const noEmpty = true; ```

**mejor**```  const isOpen = true; ```\
**mejor**```  const canWrite = true; ```\
**mejor**```  const hasFruit = true; ```\
**mejor**```  const isActive = true; ```\
**mejor**```  const hasValues = true; ```\
**mejor**```  const isEmpty = true; ```

### Numbers
**malo**```  const fruits = 3; ```\
**malo**```  const cars = 10; ```

**mejor**```  const maxFruits = 5; ```\
**mejor**```  const minFruits = 1; ```\
**mejor**```  const totalFruits = 3; ```\
**mejor**```  const totalOfCars = 5; ```

### Funciones
Los nombres de las funciones deben tener el verbo de la acción a realizar más el sustantivo de lo que vamos a usar:

**malo**```  createUserIfNotExists();```\
**malo**```  updateUserIfNotEmpty();```\
**malo**```  sendEmailIfFieldsValid();```\

**mejor**```  createUser();```\
**mejor**```  updateUser();```\
**mejor**```  sendEmail();```

#### Consideraciones con las funciones
1. La función debe de hacer lo que exactamente dice que hace: 
- createUser() no puede enviar emails y mostrar información en pantalla cuando su responsabilidad es crear el usuario 

2. Limitar a 3 parámetros posicionales 
3. La simplicidad es fundamental
4. Deberían tener tamaño reducido, menor a 20 líneas de código
5. Si son de una sola línea pero sin causar complejidad de lectura
6. Evitar el uso del __else__
7. Priorizar el uso del operador ternario
9. **Recomendado** ordenar alfabeticamente los argumentos

### Clases
Deben de tener frases formados por el sustantivo
- El nombre es lo más importante de la clase
- Formados por un sustantuvo o frases de sustantivo
- No deben de ser muy genéricos
- Usar UpperCamelCase

**malo**```  class Manager{}```\
**malo**```  class Data{}```\
**malo**```  class Info{}```\
**malo**```  class Individual{}```\
**malo**```  class Processor{}```\
**malo**```  class SpecialMonsterView{}```

***3 preguntas para determinar para saber si es un buen nombre***
- ¿Qué exactamente hace la clase?
- ¿Cómo exactamente esta clase realiza cierta tarea?
- ¿Hay algo específico sobre su ubicación?

**malo**```  class Manager{}```\
**malo**```  class Data{}```\
**malo**```  class Info{}```\
**malo**```  class Individual{}```\
**malo**```  class Processor{}```\
**malo**```  class SpecialMonsterView{}```
