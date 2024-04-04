(() => {
    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        // if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
        //     return true;
        // } else {
        //     return false;
        // }
        //? if( fruit === 'manzana' ) return true;
        //? if( fruit === 'cereza' ) return true;
        //? return fruit === 'ciruela'? true : false;
        const redFruitsNames: string[] = ['manzana', 'cereza', 'ciruela'];
        return fruit.includes( fruit ) ;
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColors = 'red'|'yellow'|'purple';
    function getFruitsByColor( color: FruitColors ): string[] {
        const fruitsByColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple:['moras', 'uvas'],
        };
        if (!Object.keys( fruitsByColor ).includes( color ))
            throw new Error('The color must be: red, yellow, or purple')
        
        return fruitsByColor[color];

        // if ( color === 'red' ) {
        //     return ['manzana','fresa'];
        // } else if ( color === 'yellow') {
        //     return ['piña','banana'];
        // } else if ( color === 'purple') {
        //     return ['moras','uvas']
        // } else {
        //     throw Error('the color must be: red, yellow, purple');
        // }

        //? if( color === 'red' ) return ['manzana', 'fresa'];
        //? if( color === 'yellow' ) return ['piña', 'banana'];
        //? if( color === 'purple' ) return ['moras', 'uvas'];
        //? throw new Error('The color must be: red, yellow, or purple');
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps(){
        if( !isFirstStepWorking ) return 'First step broken.';
        if( !isSecondStepWorking ) return 'Second step broken.';
        if( !isThirdStepWorking ) return 'Third step broken.';
        return ( !isFourthStepWorking )? 'Fourth step broken.' :'Working properly!'
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();