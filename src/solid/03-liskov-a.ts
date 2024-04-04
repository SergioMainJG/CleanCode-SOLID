import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo, Ford, Ferrari } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeats());
        })

        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }         

        // }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(2),
        new Ferrari(2),
    ];


    printCarSeats( cars );

})();